'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    associate = function(models) {
      User.hasMany(models.Item, {
        foreignKey: 'user_id'
      })
      User.hasMany(models.Order, {
        foreignKey: 'order_id'
      })
    }
  }
  User.init({
    user_role: {
      type: DataTypes.STRING
    },
    user_name: {
      type: DataTypes.STRING
    },
    user_email: {
      type: DataTypes.STRING
    },
    user_password: {
      type: DataTypes.STRING
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
    modelName: 'User',
  });

  return User;
};