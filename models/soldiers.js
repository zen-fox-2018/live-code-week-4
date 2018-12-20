'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldiers = sequelize.define('Soldiers', {
    name: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    KingdomId: DataTypes.INTEGER
  }, {});
  Soldiers.associate = function(models) {
    // associations can be defined here
  };
  return Soldiers;
};