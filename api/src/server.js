import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import {Claim, User} from './models'
import { resolver } from 'graphql-sequelize'
import slugify from 'slugify'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type User {
    id: ID
    email: String
    firstName: String
    lastName: String
  }

  type Claim {
    id: ID
    url: String
    title: String
    authorName: String
    authorURL: String
    dateEdited: String
    authorId: ID
  }

  type Query {
    claims(url: String): [Claim]
    users: [User]
    user(id: ID): User
    claimsForUser(id: ID): [Claim]
  }

  type Mutation {
    addClaim(title: String, authorId: ID): Claim
    addUser(email: String, firstName: String, lastName: String): User
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    claims: resolver(Claim),
    users: resolver(User),
    user: (_, {id}) => User.findOne({where: {id: id}}),
    claimsForUser: (_, {id}) => Claim.findAll({where: {authorId: id}})
  },
  Mutation: {
    addClaim: (parent, {title, authorId}) =>
      Claim.create({title: title, url: slugify(title), authorId: authorId}),
    addUser: (parent, attributes) =>
      User.create(attributes)
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 8088 }, () =>
           console.log(`🚀 Server ready at http://localhost:8088${server.graphqlPath}
`),
          );
