'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roomId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rooms',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      customerId: {
        type: Sequelize.INTEGER,
        type: Sequelize.INTEGER,
        references: {
          model: 'Customers',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      duration: {
        type: Sequelize.INTEGER
      },
      orderEndTime: {
        type: Sequelize.DATE
      },
      isDone: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      isBooked: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};