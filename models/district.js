'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    districtName: DataTypes.STRING,
    KingdomId: DataTypes.INTEGER
  }, {});
  District.associate = function(models) {
    // associations can be defined here
    District.hasOne(models.Kingdom);
  };
  return District;
};