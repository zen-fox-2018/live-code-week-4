'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    KingdomId: DataTypes.INTEGER
  }, {});
  Soldier.associate = function(models) {
    Soldier.belongsTo(models.Kingdom, {
      foreignKey: "KingdomId"
    })
  };

  Soldier.countAll = function() {
    Soldier.count()
    .then(data => {
      return data
    })
    .catch(err => {
      throw err
    }) 
  }


  return Soldier;
};