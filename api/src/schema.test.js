import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';
import { runQuery } from 'apollo-server-core'
import typeDefs from 'rex-schema'
import resolvers from './schema/resolvers'

import { setupCleanDatabase, clearDatabase, cleanupDatabaseConnection } from './domain'

import { Claim, User, sequelize } from './models'
import { travis } from './test/data'

const schema = makeExecutableSchema({typeDefs, resolvers})

beforeAll(setupCleanDatabase)

afterEach(clearDatabase)

afterAll(cleanupDatabaseConnection)

describe("with an existing User", () => {
  let user;

  beforeEach(() => User.register(travis, "catsrcool").then((savedTravis) => {
    user = savedTravis
  }))

  const queryResult = async (queryString, variables, currentUser=travis) =>
        runQuery({schema, queryString, variables,
                  debug: true,
                  context: {
                    currentUser
                  }})

  test('addClaim creates a claim', async () => {
    await expect(queryResult('mutation AddClaim($title: String!, $authorID: ID) {addClaim(title: $title, authorID: $authorID) {slug, title}}', {title: "Foo"})).resolves.toEqual(
      {data: {addClaim: {title: "Foo", slug: "foo"}}}
    );
  });

  describe('with a claim', async () => {
    let claim;
    beforeEach(() => Claim.create({title: "Bar"}).then((savedClaim) => {
      claim = savedClaim;
    }))

    test('claims returns claims', async () => {
      await expect(queryResult('{claims { title, slug }}')).resolves.toEqual(
        {data: {claims: [{title: "Bar", slug: "bar"}]}}
      );
    });
  })
})
