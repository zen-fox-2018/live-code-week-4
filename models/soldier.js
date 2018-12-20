'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3,10],
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
    kingdomId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeValidate: (user, options) => {
        return sequelize.models.Soldier.findAll({where: {kingdomId: user.kingdomId}})
          .then(function(soldiers) {
            if (soldiers) {
              if (soldiers.length >= 20) {
                throw new Error('Maximum allowed soldiers')
              }
            }
          })
          .catch(function(err) {
            throw err
          })
      }
    }
  });
  Soldier.associate = function(models) {
    Soldier.belongsTo(models.Kingdom, {foreignKey : 'kingdomId'});
  };
  return Soldier;
};