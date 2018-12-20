'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: {
      type: DataTypes.STRING,
      validate: {
        checkNull: function (value) {
          if (!value) {
            throw new Error(`Nama harus diisi`)
          }
        },
        checkLength: function (value) {
          if (value.length < 3 || value.length > 10) {
            throw new Error(`Name must between 3 and 10 character`)
          }
        }
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: {
        checkNull: function (value) {
          if (!value) {
            throw new Error(`Attack harus diisi`)
          }
        },
        checkValue: function (value) {
          if (Number(value) < 100) {
            throw new Error(`Minimum input attack is 100`)
          }
          if (Number(value) > 1000) {
            throw new Error(`Maximum input attack is 1000`)
          }
        }
      }
    }
  }, {});
  Soldier.associate = function (models) {
    Soldier.belongsTo(models.Kingdom)
  };

  Soldier.beforeValidate((val, option) => {
    
  })
  return Soldier;
};