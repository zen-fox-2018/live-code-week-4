'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    KingdomId: DataTypes.INTEGER
  }, {});

  Soldier.getJumlahPasukan = (id) => {
    Soldeir.findAll({
        attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'jumlahPasukan']]
    });
  }

  Soldier.associate = function(models) {
    // associations can be defined here
    Soldier.belongsTo(models.Kingdom)
  };
  return Soldier;
};