import Sequelize from 'sequelize'
import slugify from 'slugify'

export default (sequelize, DataTypes) => {
  var Claim = sequelize.define('Claim', {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID
    },
    url: DataTypes.TEXT,
    title: {
      type: DataTypes.TEXT,
      set(val) {
        this.setDataValue('title', val)
        if (!this.getDataValue('url')) {
          this.setDataValue('url', slugify(val, {lower: true}))
        }
      }
    },
    imageUrl: DataTypes.TEXT,
    imageDescription: DataTypes.TEXT
  }, {tableName: 'claims'});
  Claim.associate = function(models) {
    Claim.belongsTo(models.User, {as: 'author', foreignKey: 'authorId'})
  };
  return Claim;
};
