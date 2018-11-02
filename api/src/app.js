import express from 'express'

import { ApolloServer } from 'apollo-server-express'
import typeDefs from 'rex-schema'
import context from './context'
import resolvers from './schema/resolvers'

import {setupAuth} from './auth'

const app = express();

setupAuth(app)

export const apolloServer = new ApolloServer({
  typeDefs, resolvers, context
})
apolloServer.applyMiddleware({ app })

export default app
