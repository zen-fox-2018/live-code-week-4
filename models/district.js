'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    districtName: DataTypes.STRING
  }, {});
  District.associate = function(models) {
    // associations can be defined here
    District.hasMany(models.Kingdom)
  };
  return District;
};