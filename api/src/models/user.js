import { UserExistsError, UsernameRequiredError } from '../domain/errors'

import securePassword from 'secure-password'
const pwd = securePassword({
  memlimit: securePassword.MEMLIMIT_DEFAULT,
  opslimit: securePassword.OPSLIMIT_DEFAULT
})


export default (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID
    },
    username: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.BLOB
  }, {tableName: 'users'});
  User.associate = function(models) {
    User.hasMany(models.Claim, {foreignKey: 'authorID'})
  };
  User.generateHash = (password) =>
    pwd.hash(Buffer.from(password))

  User.findByUsername = (username) =>
    User.find({where: {username}})

  User.register = (user, password) => new Promise(async (resolve, reject) => {
    const { username } = user
    if (username) {
      const existingUser = await User.findByUsername(username)
      if (!existingUser) {
        return resolve(User.create({...user, password: await User.generateHash(password)}))
      } else {
        return reject(new UserExistsError(""))
      }
    } else {
      return reject(new UsernameRequiredError(""))
    }
  })

  return User;
};
