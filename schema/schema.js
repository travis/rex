'use strict';
module.exports = require('graphql-tag')`
  type User {
    id: ID
    email: String
    firstName: String
    lastName: String
  }

  type Claim {
    id: ID
    slug: String
    title: String
    authorName: String
    authorURL: String
    dateEdited: String
    authorID: ID
  }

  type Query {
    claims(slug: String): [Claim]
    users: [User]
    user(id: ID): User
    claimsForUser(id: ID): [Claim]
  }

  type Mutation {
    addClaim(title: String, authorID: ID): Claim
    addUser(email: String, firstName: String, lastName: String): User
  }
`;
