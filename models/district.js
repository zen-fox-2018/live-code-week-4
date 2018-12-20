'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    districtName: DataTypes.STRING
  }, {});
  District.associate = function(models) {
    District.hasOne(models.Kingdom)
    District.belongsTo(models.Kingdom)
    // associations can be defined here
  };
  return District;
};