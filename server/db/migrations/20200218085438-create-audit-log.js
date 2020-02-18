'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AuditLogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      entity: {
        type: Sequelize.STRING
      },
      action: {
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
      view: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('AuditLogs');
  }
};