import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';
import typeDefs from './schema/typeDefs'
import resolvers from './schema/resolvers'

import { Claim, sequelize } from './models'

const schema = makeExecutableSchema({typeDefs, resolvers})
const queryResult = (query, vars) =>
      graphql(schema, query, null, null, vars)

beforeAll(() => {
  return sequelize.sync({force: true})
});

beforeEach(() => {
  return Claim.bulkCreate([
    { title: 'Bar' },
  ])
});

afterEach(() => {
  return Claim.destroy({truncate: true})
});

afterAll(() => {
  return sequelize.close()
})

test('addClaim creates a unit', async () => {
  await expect(queryResult('mutation AddClaim($title: String!, $authorID: ID) {addClaim(title: $title, authorID: $authorID) {slug, title}}', {title: "Foo"})).resolves.toEqual(
    {data: {addClaim: {title: "Foo", slug: "foo"}}}
  );
});

test('claims returns claims', async () => {
  await expect(queryResult('{claims { title, slug }}')).resolves.toEqual(
    {data: {claims: [{title: "Bar", slug: "bar"}]}}
  );
});
