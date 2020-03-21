'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      arrival: {
        type: Sequelize.STRING
      },
      departure: {
        type: Sequelize.STRING
      },
      room: {
        type: Sequelize.STRING
      },
      status: {
        defaultValue: 'Reserved',
        type: Sequelize.ENUM,
        values: ['Reserved', 'In Progress', 'Cancelled', 'Completed']
      },
      note: {
        type: Sequelize.STRING
      },
      cancellationNote: {
        type: Sequelize.STRING
      },
      accountId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Account', 
          key: 'id'
        }
      },
      employeeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Employee', 
          key: 'id'
        }
      },
      serviceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Service', 
          key: 'id'
        }
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Client', 
          key: 'id'
        }
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
    return queryInterface.dropTable('Reservations');
  }
};