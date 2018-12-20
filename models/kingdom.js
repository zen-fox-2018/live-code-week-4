'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kingdom = sequelize.define('Kingdom', {
    kingdomName: DataTypes.STRING,
    nameOfKing: DataTypes.STRING,
    DistrictId: DataTypes.INTEGER,
    population: {
      type: DataTypes.INTEGER,
      defaultValue: 4
    }
  }, {});
  Kingdom.associate = function(models) {
    Kingdom.hasMany(models.Soldier)
    Kingdom.hasOne(models.District)
    Kingdom.belongsTo(models.District)
    // associations can be defined here
  };
  return Kingdom;
};