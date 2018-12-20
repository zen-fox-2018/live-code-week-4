'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: {type :  DataTypes.STRING,
          validate : {
            len: {
              args: [3,100],
              msg: "Name must between 3 and 10 characters"
          }, 
          max: {
            args: 1000,
            msg: "Maximum input attack is 1000"
        }, min: {
          args: 100,
          msg: "Minimum input attack is 100"
      }}},
    attack: DataTypes.INTEGER,
    KingdomId : DataTypes.INTEGER
  }, {});
  Soldier.associate = function(models) {
    Soldier.belongsTo(models.Kingdom)
    // associations can be defined here
  };
  return Soldier;
};