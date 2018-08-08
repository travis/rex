export default (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID
    },
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    email: DataTypes.TEXT
  }, {tableName: 'users'});
  User.associate = function(models) {
    User.hasMany(models.Claim, {foreignKey: 'authorID'})
  };
  return User;
};
