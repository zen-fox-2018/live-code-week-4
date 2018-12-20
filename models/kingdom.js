'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kingdom = sequelize.define('Kingdom', {
    kingdomName: DataTypes.STRING,
    nameOfking: DataTypes.STRING,
    DistrictId: DataTypes.INTEGER,
    population : { type : DataTypes.INTEGER,
      defaulValue : 4,
      allowNull: false}
  }, {});
  Kingdom.associate = function(models) {
    Kingdom.hasMany (models.Soldier)
    Kingdom.hasOne (models.District)
  };
  return Kingdom;
};