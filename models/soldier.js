'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soldier = sequelize.define('Soldier', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3,10],
          msg: `Name must be between 3 and 10`
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
  }, {}
  );

  Soldier.associate = function(models) {
    Soldier.belongsTo(models.Kingdom, {
      foreignKey: "KingdomId"
    })
  };

  Soldier.countAll = function(kingdomId) {
    let result = null;
    Soldier.findAll({
      where: {KingdomId: kingdomId}
    })
    .then(data => {
      return Soldier.count(data)
    })
    .then(counter => {
      result = counter
    })
    .catch(err => {
      throw err
    }) 
    return result
  }


  return Soldier;
};

