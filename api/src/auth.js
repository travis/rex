import jwtMiddleware from 'express-jwt'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import { User, sequelize } from './models'

const {
  SESSION_SECRET
} = process.env;

const signJWT = (payload, secretOrPrivateKey, options={}) => new Promise(
  (resolve, reject) =>
    jwt.sign(payload, secretOrPrivateKey, options, (err, token) => {
      if (err) {
        reject(err)
      } else {
        resolve(token)
      }
    }))

const loginUser = async (response, {id, username}) => {
  const token = await signJWT({id}, SESSION_SECRET, {expiresIn: "30 days"})
  response.cookie("jwt", token, {httpOnly: true})
}

export const setupAuth = (app) => {
  app.use(cookieParser())
  app.use(jwtMiddleware({
    secret: SESSION_SECRET,
    credentialsRequired: false,
    getToken: (req) => req.cookies.jwt
  }))
  app.post('/login', bodyParser.urlencoded(), async (request, response) => {
    const {username, password} = request.body
    const user = await User.findByUsername(username)
    if (await user.verifyPassword(password)) {
      await loginUser(response, user)
      response.redirect(302, "/")
    } else {
      response.redirect(302, "/?error=login_failed")
    }
  })
  app.post('/register', bodyParser.urlencoded(), async (request, response) => {
    const {username, password} = request.body
    const user = await User.register({username}, password)
    await loginUser(response, user)
    response.redirect(302, "/")
  })
}
