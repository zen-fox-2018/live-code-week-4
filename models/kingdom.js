'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kingdom = sequelize.define('Kingdom', {
    kingdomName: DataTypes.STRING,
    nameOfKing: DataTypes.STRING,
    DistrictId: DataTypes.INTEGER
  }, {});

  Kingdom.prototype.getTotalPasukan = function() {
    return `totalSoldier ${this.Soldiers.length} pasukan`
  }

  Kingdom.associate = function(models) {
    // associations can be defined here
    Kingdom.hasMany(models.Soldier)
    Kingdom.belongsTo(models.District)
  };
  return Kingdom;
};