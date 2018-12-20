'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name:{type: DataTypes.STRING, 
      validate :{
        len : {
          args: [3,10],
          msg: "Name must between 3 and 10 characters"
        }
      }
    },
    attack:{type: DataTypes.INTEGER,
      validate : {
        max : {
          args :1000,
          msg : "Maximum input attack is 1000"
        },
        min : {
          args:100,
          msg: "Minimum input attack is 100"
        }
      }  
    },
    KingdomId: DataTypes.INTEGER
  }, {hooks :{
    afterValidate: (val)=> {
      return new Promise ((resolve, reject)=> {
        sequelize.models.Kingdom.findByPk(val.KingdomId, {include: [
          {model: sequelize.models.Soldier}
        ]})
        .then(dataKingdom => {
          if(dataKingdom.Soldiers.length >= 20) {
            reject(`Kingdom Has Already full soldier`)
          } else {
            resolve()
          }
        })
      })
      .catch(err => reject(err))
      
    }
  }});
  Soldier.associate = function(models) {
    // associations can be defined here
    Soldier.belongsTo(models.Kingdom)
  };
  return Soldier;
};