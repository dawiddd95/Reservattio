'use strict';
module.exports = (sequelize, DataTypes) => {
	const Employee = sequelize.define('Employee', {
		name: DataTypes.STRING,
		surname: DataTypes.STRING,
		accountId: {
			type: DataTypes.INTEGER,
			references: {
			  model: 'Account', 
			  key: 'id'
			}
		},
		phone: DataTypes.STRING,
		email: DataTypes.STRING,
		username: DataTypes.STRING,
		password: DataTypes.STRING,
		active: DataTypes.BOOLEAN,
		type: DataTypes.STRING,
		roles: DataTypes.ARRAY(DataTypes.STRING)
	}, {});
	Employee.associate = function(models) {
		Employee.hasMany(models.Reservation, {
			foreignKey: 'employeeId'  
		}),
		Employee.hasMany(models.AuditLog, {
			foreignKey: 'employeeId'  
		}),
		Employee.belongsToMany(models.Service, {
			through: 'EmployeeService', 
			foreignKey: 'employeeId'
		})
	};
	return Employee;
};