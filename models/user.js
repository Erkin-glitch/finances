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
  }
  User.init({
    title: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: "users",
    timestamps: false,       // отключаем автоматические createdAt и updatedAt
    createdAt: true,
  });
  return User;
};