import { Claim, User } from '../models'
import { resolver } from 'graphql-sequelize'
import slugify from 'slugify'

export default {
  Query: {
    claims: resolver(Claim),
    users: resolver(User),
    user: (_, {id}) => User.findOne({where: {id: id}}),
    claimsForUser: (_, {id}) => Claim.findAll({where: {authorID: id}})
  },
  Mutation: {
    addClaim: (parent, {title, authorID}) =>
      Claim.create({title: title, authorID: authorID}),
    addUser: (parent, attributes) =>
      User.create(attributes)
  }
}
