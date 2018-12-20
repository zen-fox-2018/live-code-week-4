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
  Kingdom.associate = function (models) {
    Kingdom.hasMany(models.Soldier)
    Kingdom.belongsTo(models.District)
  };

  Kingdom.prototype.getSoldier = function (data) {
    let counter = 0
    data.forEach(element => {
      counter++
    });
    return `${counter} pasukan`
  }
  return Kingdom;
};