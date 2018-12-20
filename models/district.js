'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    districtName: DataTypes.STRING,
    population: DataTypes.INTEGER
  }, {});
  District.associate = function(models) {
    // associations can be defined here
    District.hasMany(models.Kingdoms)
  };
  return District;
};