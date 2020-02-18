'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    date: DataTypes.STRING,
    room: DataTypes.STRING,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    note: DataTypes.STRING,
    cancellationNote: DataTypes.STRING
  }, {});
  Reservation.associate = function(models) {
    // associations can be defined here
  };
  return Reservation;
};