'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    districtName: DataTypes.STRING,
    population: DataTypes.INTEGER,
    KingdomId: DataTypes.INTEGER
  }, {});
  District.associate = function(models) {
    // associations can be defined here
  };
  return District;
};