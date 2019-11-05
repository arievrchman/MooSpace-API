'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    name: DataTypes.STRING
  }, {});

  // Hooks
  Room.associate = function(models) {
    // associations can be defined here
    Room.hasMany(models.Order);
  };
  return Room;
};