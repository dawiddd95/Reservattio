'use strict';
module.exports = (sequelize, DataTypes) => {
	const Account = sequelize.define('Account', {
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		key: DataTypes.STRING,
		code: DataTypes.STRING
	}, {});
	Account.associate = function(models) {
		Account.hasMany(models.Reservation, {
			foreignKey: 'accountId'  
		}),
		Account.hasMany(models.Employee, {
			foreignKey: 'accountId'  
		}),
		Account.hasMany(models.AuditLog, {
			foreignKey: 'accountId'  
		}),
		Account.hasMany(models.Service, {
			foreignKey: 'accountId'  
		}),
		Account.hasMany(models.Client, {
			foreignKey: 'accountId'  
		})
	};
	return Account;
};