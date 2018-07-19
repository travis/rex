import Sequelize from 'sequelize'

export default (sequelize, DataTypes) => {
  var Claim = sequelize.define('Claim', {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID
    },
    url: DataTypes.TEXT,
    title: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    imageDescription: DataTypes.TEXT
  }, {tableName: 'claims'});
  Claim.associate = function(models) {
    Claim.belongsTo(models.User, {as: 'author'})
  };
  return Claim;
};
