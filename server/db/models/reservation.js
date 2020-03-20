'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    date: DataTypes.ARRAY(DataTypes.STRING),
    room: DataTypes.STRING,
    accountId: DataTypes.INTEGER,
    employeeId: DataTypes.INTEGER,
    serviceId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    status: {
      defaultValue: 'Reserved',
      type: DataTypes.ENUM,
      values: ['Reserved', 'In Progress', 'Cancelled', 'Completed']
    },
    note: DataTypes.STRING,
    cancellationNote: DataTypes.STRING
  }, {});
  Reservation.associate = function(models) {

  };
  return Reservation;
};