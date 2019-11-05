'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    'Customer',
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Name cannot be empty!',
          },
        },
      },
      identityNumber: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Identity Number cannot be empty!',
          },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Phone Number cannot be empty!',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Email cannot be empty!',
          },
        },
      },
      image: DataTypes.STRING,
    },
    {},
  );

  // Hooks
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.hasMany(models.Order);
  };
  return Customer;
};
