'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldiers = sequelize.define('Soldiers', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 10],
          msg: "Name must between 3 and 10 characters"
        }
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 100,
          msg: "Minimum input attack is 100"
        },
        max: {
          args: 1000,
          msg: "Maximum input attack is 1000"
        }
      }
    },
    KingdomId: DataTypes.INTEGER
  }, {});
  Soldiers.associate = function (models) {
    // associations can be defined here
    Soldiers.belongsTo(models.Kingdoms)
  };
  return Soldiers;
};