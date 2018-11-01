import dotenv from '../etc/dotenv'
import commandLineArgs from 'command-line-args'
import db from '../models'

const { force } = commandLineArgs([
  { name: 'force', alias: 'f', type: Boolean }
])

db.sequelize.sync({force: force}).
  then(() => db.sequelize.close())
