'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    kingdomId: DataTypes.INTEGER
  }, {});
  Soldier.associate = function(models) {
    // associations can be defined here
  };
  return Soldier;
};