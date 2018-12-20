'use strict';
const Model = require('../models')
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args:[3, 10],
          msg: "`Name must between 3 and 10 characters`"
        }
      }
    } ,
    attack: {
      type:DataTypes.INTEGER,
      validate:{
        minimumattack: function (value) {
          if (value < 100) {
            throw new Error ("Minimum input attack is 100")
          } else if (value > 1000) {
            throw new Error ('Maximum input attack is 1000')
          }
        }
      }
    },
    KingdomId: DataTypes.INTEGER
  }, {});
  Soldier.associate = function(models) {
    Soldier.belongsTo(models.Kingdom)
    // associations can be defined here
  };

  // Soldier.beforeCreate( (value) => {
  //  Model.Kingdom.findOne({
  //     where: {
  //       id : value.KingdomId
  //     },
  //     include:[{
  //       model: Soldier
  //     }]
  //   })
  //   .then((data) => {
  //     console.log(data)
  //     if (data.soldiers.length-1 > 20) {
  //       throw new Error("Kingdom sudah penuh")
  //     }
  //   })
  //   .catch((err) => {
  //     throw new Error(err)
  //   })
  // })
  return Soldier;
};