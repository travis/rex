'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('claims', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1,
        type: DataTypes.UUID
      },
      url: {
        type: DataTypes.TEXT
      },
      title: {
        type: DataTypes.TEXT
      },
      imageUrl: {
        type: DataTypes.TEXT
      },
      imageDescription: {
        type: DataTypes.TEXT
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      authorId: {
        type: DataTypes.UUID,
        references: { model: 'users', key: 'id' }
      }
    });
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('claims');
  }
};
