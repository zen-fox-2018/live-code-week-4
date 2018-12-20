'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    districtName: DataTypes.STRING
  }, {});
  District.associate = function(models) {
    District.hasOne(models.Kingdom, { foreignKey: 'DistrictId' })
  };
  return District;
};