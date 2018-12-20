'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    KingdomId : DataTypes.INTEGER
  }, {});
  Soldier.associate = function(models) {
    Soldier.belongsTo(models.Kingdom)
    // associations can be defined here
  };
  return Soldier;
};