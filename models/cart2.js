'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart2 = sequelize.define('cart2', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  cart2.associate = function(models) {
    // associations can be defined here
  };
  return cart2;
};