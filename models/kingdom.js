'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kingdom = sequelize.define('Kingdom', {
    kingdomName: DataTypes.STRING,
    nameOfKing: DataTypes.STRING,
    DistrictId: DataTypes.INTEGER,
    population: DataTypes.INTEGER
  }, {});
  Kingdom.associate = function (models) {
    // associations can be defined here
    Kingdom.hasMany(models.Soldier);
    Kingdom.hasOne(models.District);
  };
  return Kingdom;
};