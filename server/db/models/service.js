'use strict';
module.exports = (sequelize, DataTypes) => {
	const Service = sequelize.define('Service', {
		name: DataTypes.STRING,
		price: DataTypes.DECIMAL,
		note: DataTypes.STRING,
		accountId: DataTypes.INTEGER,
	}, {});
	Service.associate = function(models) {
		Service.hasMany(models.Reservation, {
			foreignKey: 'serviceId'  
		}),
		Service.belongsToMany(models.Employee, {
			through: 'EmployeeService',
			foreignKey: 'serviceId'
		})
	};
	return Service;
};