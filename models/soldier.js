'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: {
      type : DataTypes.STRING,
      validate : {
        isAlpha : true,
        len: {
          args : [3,10],
          msg : 'Name must between 3 and 10 characters'
        }
      }
    },
    attack: {
      type : DataTypes.INTEGER,
      validate : {
        isNumeric : {
          args : true,
          msg : 'Input must but an integer beetween 100 and 1000'
        },
        validAttack : function(value) {
          if (value < 100){
            throw 'Minimum input attack is 100'
          } else if (value > 1000) {
            throw 'Maximum input attack is 1000'
          }
        }
      }
    },
    KingdomId: DataTypes.INTEGER
  }, {});
  Soldier.associate = function(models) {
    // associations can be defined here
    Soldier.belongsTo(models.Kingdom)
  };
  return Soldier;
};