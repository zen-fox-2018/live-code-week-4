'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kingdom = sequelize.define('Kingdom', {
    kingdomName: DataTypes.STRING,
    nameOfKing: DataTypes.STRING,
    DistrictId: DataTypes.INTEGER,
    population: {
      type: DataTypes.INTEGER,
      defaultValue: 4
    }
  }, {});
  Kingdom.associate = function(models) {
    Kingdom.hasMany(models.Soldier)
    Kingdom.belongsTo(models.District)
  };

  Kingdom.getSoldier = function (data) {
    return `${data} Pasukan!`
  }
  return Kingdom;
};