'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    KingdomId: DataTypes.INTEGER
  }, {});

  Soldier.getJumlahPasukan = (id) => {
    return new Promise((resolve, reject) => {
      Soldier.findAll({
        where: {
          KingdomId: id
        }
      })

      .then((soldiers) => {
        resolve (`${soldiers.length} pasukan`)
      })

      .catch((err) => {
        reject(err)
      })
    })
  }

  Soldier.associate = function(models) {
    // associations can be defined here
    Soldier.belongsTo(models.Kingdom)
  };
  return Soldier;
};