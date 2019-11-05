'use strict';
const hash = require('../utils/bcrypt').hash;
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    'Admin',
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
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Username cannot be empty!',
          },
        },
      },
      email: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Password cannot be empty!',
          },
        },
      },
      image: DataTypes.STRING,
    },
    {},
  );

  // Hooks
  Admin.beforeCreate(admin => {
    admin.email = `${admin.username}@moospace.com`;
    admin.password = hash(admin.password);
  });

  // Associations
  Admin.associate = function(models) {
    // associations can be defined here
  };

  return Admin;
};
