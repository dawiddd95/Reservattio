'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manager = sequelize.define('Manager', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    accountId: {
			type: DataTypes.INTEGER,
			references: {
			  model: 'Account', 
			  key: 'id'
			}
		},
  }, {});
  Manager.associate = function(models) {
    // associations can be defined here
  };
  return Manager;
};