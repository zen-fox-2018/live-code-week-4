'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    KingdomId: DataTypes.INTEGER
  }, {});
  Soldier.associate = function(models) {
    // associations can be defined here
    Soldier.hasOne(models.Kingdom)
  };
  return Soldier;
};