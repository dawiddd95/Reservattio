'use strict';
module.exports = (sequelize, DataTypes) => {
  const AuditLog = sequelize.define('AuditLog', {
    date: DataTypes.STRING,
    entity: DataTypes.STRING,
    action: DataTypes.STRING,
    view: DataTypes.STRING
  }, {});
  AuditLog.associate = function(models) {

  };
  return AuditLog;
};