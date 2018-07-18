import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

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
`;

const claims = [{id: 1,
                 url: "bacon_is_best",
                 title: "Bacon is best",
                 authorName: "Ian",
                 authorURL: "ian",
                 dateEdited: "2018-07-18T03:43:53+00:00"},
                {id: 2,
                 url: "ham_is_best",
                 title: "Ham is best",
                 authorName: "Tani",
                 authorURL: "tani",
                 dateEdited: "2018-08-12T06:03:12+00:00"}]

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    claims: () => claims,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 8088 }, () =>
           console.log(`🚀 Server ready at http://localhost:8088${server.graphqlPath}
`),
          );
