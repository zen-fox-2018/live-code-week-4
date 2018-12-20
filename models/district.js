'use strict';
const setDistrict = require('../helpers/setDistrict')
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    districtName: DataTypes.STRING,
    population: DataTypes.INTEGER
  }, {});

  District.prototype.setdistrict = function() {
    return setDistrict(districtName)
  }

  District.associate = function(models) {
    // associations can be defined here
    District.hasOne(models.Kingdom)
  };
  return District;
};