'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
    }
  }

  Transaction.init({
    title: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction',
    tableName: 'transactions',  
  });

  return Transaction;
};
