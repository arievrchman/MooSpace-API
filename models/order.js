'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    roomId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    orderEndTime: DataTypes.DATE,
    isDone: DataTypes.BOOLEAN,
    isBooked: DataTypes.BOOLEAN
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.Room);
    Order.belongsTo(models.Customer);
  };
  return Order;
};