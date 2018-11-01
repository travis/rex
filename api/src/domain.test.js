import { User, sequelize } from './models'
import { UserExistsError, UsernameRequiredError } from './domain/errors'

import { setupCleanDatabase, clearDatabase, cleanupDatabaseConnection } from './domain'

import { travis } from './test/data'

beforeAll(setupCleanDatabase)

afterEach(clearDatabase)

afterAll(cleanupDatabaseConnection)

describe('user registration', () => {
  test('a new user can be created', async () => {
    const user = await User.register(travis, "kingme")
    expect(user.dataValues).toMatchSnapshot({
      id: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      password: expect.anything()
    })
  })

  test('no username throws error', async () => {
    await expect(User.register({...travis, username: undefined}, "kingme")).rejects
      .toThrow(Error)
  })

  test('duplicate username throws error', async () => {
    await User.register({...travis, username: "travsquared"}, "kingme")
    await expect(User.register({...travis, username: "travsquared"}, "kingme")).rejects
      .toThrow(Error)
  })
})
