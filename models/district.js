'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    districtName: DataTypes.STRING,
    population: DataTypes.INTEGER
  }, {});
  District.associate = function(models) {
    District.belongsTo(models.Kingdom)
  };
  return District;
};