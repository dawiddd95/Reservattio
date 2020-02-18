'use strict';
module.exports = (sequelize, DataTypes) => {
	const EmployeeService = sequelize.define('EmployeeService', {
		serviceId: DataTypes.INTEGER,
		employeeId: DataTypes.INTEGER
	}, {});
	EmployeeService.associate = function(models) {
		EmployeeService.belongsTo(models.Service, {foreignKey: 'serviceId'})
		EmployeeService.belongsTo(models.Employee, {foreignKey: 'employeeId'})
	};
	return EmployeeService;
};