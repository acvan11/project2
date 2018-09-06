'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {
    name: DataTypes.STRING
  }, {});
  cart.associate = function(models) {
    // associations can be defined here
  };
  return cart;
};