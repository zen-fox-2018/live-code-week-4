'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name:{
      type:DataTypes.STRING,
      validate:{
        len : [3,10]
      }
    } ,
    attack: {
      type:DataTypes.INTEGER,
      validate:{
        min: 100,
        max: 1000,
      }
    },
    KingdomId: DataTypes.INTEGER
  },
   {});
  Soldier.associate = function(models) {
    // associations can be defined here
    Soldier.belongsTo(models.Kingdom)
  };

  Soldier.count = function(KingdomId){
    this.findAll({where: 
      {KingdomId:KingdomId}
    })
    .then ( dataSoldier =>{
      return dataSoldier.length
    }).catch(err =>{
      return err
    })
  }
  return Soldier;
};