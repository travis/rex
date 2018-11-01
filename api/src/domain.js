import {Claim, User, sequelize } from './models'

export const setupCleanDatabase = () => sequelize.sync({force: true})

export const clearDatabase = async () => {
  await Claim.destroy({truncate: true, cascade: true})
  await User.destroy({truncate: true, cascade: true})
}

export const cleanupDatabaseConnection = () => sequelize.close()
