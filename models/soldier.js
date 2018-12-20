'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 10],
          msg: `Name must between 3 and 10 characters`
        }
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 100,
          msg: `Minimum input attack is 100`
        },
        max: {
          args: 1000,
          msg: `Maximum input attack is 1000`
        }
      }
    },
    KingdomId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeValidate: (value) => {
        Soldier.getJumlahPasukan(value.KingdomId)
          .then((jumlah) => {
            console.log(jumlah, "=============================");
            if (jumlah > 20) {
              throw new Error (`Add soldier failed`)
            }
          })

          .catch((err) => {
            
          })
      }
    }
  });

  Soldier.getJumlahPasukan = (id) => {
    return new Promise((resolve, reject) => {
      Soldier.findAll({
        where: {
          KingdomId: id
        }
      })

      .then((soldiers) => {
        resolve (soldiers.length)
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