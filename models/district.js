'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    districtName: DataTypes.STRING,
    population: DataTypes.INTEGER
  }, {});
  District.associate = function(models) {
    District.hasOne(models.Kingdom)
    // associations can be defined here
  };
  return District;
};