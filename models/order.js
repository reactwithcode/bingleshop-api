'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    associate = function (models) {

      Order.belongsTo(models.items, {
        foreignKey: 'item_id',
        onDelete: 'CASCADE'
      })

      Order.belongsTo(models.users, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
    }

  }
  Order.init({
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Item',
        key: 'id',
        as: 'item_id'
      }
    },  
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
        as: 'user_id'
      }
    },
    order_status: {
      type: DataTypes.STRING
    },
    order_total: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    deletedAt: {
      type: DataTypes.DATE, 
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};

