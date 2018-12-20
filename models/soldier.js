'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: DataTypes.STRING,
    attack: {type : DataTypes.INTEGER,
    max : 100},
    KingdomId: DataTypes.INTEGER
  }, {});
  Soldier.associate = function(models) {
    Soldier.belongsTo (models.Kingdoms)
  };
  return Soldier;
};