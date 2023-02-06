'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    associate = function (models) {

      Item.belongsTo(models.users, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
    }

  }
  Item.init({
    item_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    item_description: {
      type: DataTypes.STRING
    },
    item_price: {
      type: DataTypes.BIGINT
    },
    item_status: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
        as: 'user_id'
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    deletedAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Item',
  });

  return Item;
};