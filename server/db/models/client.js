'use strict';
module.exports = (sequelize, DataTypes) => {
	const Client = sequelize.define('Client', {
		name: DataTypes.STRING,
		surname: DataTypes.STRING,
		phone: DataTypes.STRING,
		accountId: {
			type: DataTypes.INTEGER,
			references: {
			  model: 'Account', 
			  key: 'id'
			}
		},
		note: DataTypes.STRING
	}, {});
	Client.associate = function(models) {
		Client.hasMany(models.Reservation, {
			foreignKey: 'clientId'  
		})
	};
	return Client;
};