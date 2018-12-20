'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kingdom = sequelize.define('Kingdom', {
    kingdomName: DataTypes.STRING,
    nameOfKing: DataTypes.STRING,
    DistrictId: DataTypes.INTEGER,
    population : DataTypes.INTEGER
  }, {
    hooks : {
      afterUpdate : (value) => {
        console.log(value)
        return sequelize .models.District.update({KingdomId : value.dataValues.id}, {where : {id : value.dataValues.DistrictId }})
      }
    }
  });
  Kingdom.associate = function(models) {
    Kingdom.hasMany(models.Soldier)
    Kingdom.hasOne(models.District)
  };
  return Kingdom;
};

