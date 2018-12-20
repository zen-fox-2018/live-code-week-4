'use strict';
const getDistrict = require('../helpers/generateDistrict')
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
    Kingdom.hasOne(models.District)
    Kingdom.belongsTo(models.District)
    // associations can be defined here
  };

  Kingdom.prototype.getSoldier = function () {
    if (this.Soldiers) {

      return this.Soldiers.length + " " + "pasukan"
    } else {
      return "0 pasukan"
    }
  }
  Kingdom.prototype.getDistrict = function () {
    return getDistrict()
  }
  return Kingdom;
};