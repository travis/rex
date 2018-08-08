import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import {Claim, User} from './models'
import { resolver } from 'graphql-sequelize'
import slugify from 'slugify'

import typeDefs from './schema/typeDefs'
import resolvers from './schema/resolvers'

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 8088 }, () =>
           console.log(`🚀 Server ready at http://localhost:8088${server.graphqlPath}
`),
          );
