import { Claim, User } from '../models'
import { resolver } from 'graphql-sequelize'
import slugify from 'slugify'

export default {
  Query: {
    claims: resolver(Claim),
    users: resolver(User),
    user: (_, {id}) => User.findOne({where: {id: id}}),
    claimsForUser: (_, {id}) => Claim.findAll({where: {authorId: id}})
  },
  Mutation: {
    addClaim: (parent, {title, authorId}) =>
      Claim.create({title: title, authorId: authorId}),
    addUser: (parent, attributes) =>
      User.create(attributes)
  }
}
