'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kingdoms = sequelize.define('Kingdoms', {
    kingdomName: DataTypes.STRING,
    nameOfKing: DataTypes.STRING,
    DistrictId: DataTypes.INTEGER
  }, {});
  Kingdoms.associate = function(models) {
    // associations can be defined here
    Kingdoms.hasMany(models.Soldiers)
    Kingdoms.belongsTo(models.District)
  };
  return Kingdoms;
};