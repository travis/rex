import { gql } from 'apollo-server-express'

export default gql`
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
`
