import request from 'supertest'

import { User, sequelize } from './models'
import { setupCleanDatabase, clearDatabase, cleanupDatabaseConnection } from './domain'

import app from './app'


beforeAll(setupCleanDatabase)

afterEach(clearDatabase)

afterAll(cleanupDatabaseConnection)

expect.extend({
  toBeLoggedIn(response) {
    if (!response) {
      return {pass: false, message: "response is falsy"}
    } else if (!response.headers) {
      return {pass: false, message: "response.headers is falsy"}
    } else if (!response.headers['set-cookie']) {
      return {pass: false, message: "set-cookie header is not set"}
    } else if (!response.headers['set-cookie'][0]) {
      return {pass: false, message: "there is no cookie value in set-cookie"}
    } else {
      expect(response.headers['set-cookie'][0]).toEqual(
        expect.stringMatching(/jwt=.*; Path=.*; HttpOnly/)
      )
      return {pass: true}
    }
  }
})

test("register", async () => {
  await expect(User.findAll()).resolves.toEqual([])
  const response = await request(app).
        post("/register").type('form').
        send({username: 'travis', password: "brontosaurus"})

  expect(response.status).toBe(302)
  expect(response).toBeLoggedIn()

  const users = await User.findAll()
  expect(users[0].username).toEqual("travis")
})

describe("login", () => {
  const username = "travis"
  const password = "brontosaurus"
  beforeEach(() => User.register({username}, password))

  test("valid password", async () => {
    const response = await request(app).
          post("/login").
          type('form').send({username, password})

    expect(response.status).toBe(302)
    expect(response).toBeLoggedIn()
  })

  test("invalid password", async () => {
    const response = await request(app).
          post("/login").
          type('form').send({username, password: "HAMSNSTUFF"})

    expect(response.status).toBe(302)
    expect(response).not.toBeLoggedIn()
  })

  describe("with current-user endpoint", async () => {

    app.get("/current-user", (request, response) => {
      if (request.user) {
        response.send(JSON.stringify(request.user))
      } else {
        response.sendStatus(401)
      }
    })

    test("it 401s when not logged in", async () => {
      const response = await request(app).
            get("/current-user")
      expect(response.status).toBe(401)
    })

    test("it returns the user when logged in", async () => {
      const loginResponse = await request(app).
            post("/login").
            type('form').send({username, password})
      const response = await request(app).
            get("/current-user").
            set('Cookie', loginResponse.headers['set-cookie'])


      expect(response.status).toBe(200)
      const user = JSON.parse(response.text)
      expect(user).toMatchSnapshot({id: expect.any(String),
                                    iat: expect.any(Number),
                                    exp: expect.any(Number)
                                   })
    })
  })
})
