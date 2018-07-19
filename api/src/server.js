import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import {Claim, User} from './models'
import { resolver } from 'graphql-sequelize'
import slugify from 'slugify'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Claim {
    id: ID
    url: String
    title: String
    authorName: String
    authorURL: String
    dateEdited: String
  }

  type Query {
    claims: [Claim]
  }

  type Mutation {
    addClaim(title: String): Claim
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    claims: () => Claim.findAll({
      attributes: ['title', 'url']
    })
  },
  Mutation: {
    addClaim: (parent, {title}) =>
      Claim.create({title: title, url: slugify(title)})
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 8088 }, () =>
           console.log(`🚀 Server ready at http://localhost:8088${server.graphqlPath}
`),
          );
