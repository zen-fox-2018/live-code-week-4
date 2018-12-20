'use strict';
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: {
      type:DataTypes.STRING,
      validate: {
        len: {
          args: [3, 10],
          msg: 'Name must between 3 and 10 character'
        }
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: {
        [Op.gte] : {
          args: 100,
          msg: 'Minimum input attack is 100'
        },
        [Op.lte] : {
          args: 1000,
          msg: "Maximum input attack is 1000"
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