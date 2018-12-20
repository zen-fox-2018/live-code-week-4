'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kingdom = sequelize.define('Kingdom', {
    kingdomName: DataTypes.STRING,
    nameOfKing: DataTypes.STRING,
    DistrictId: DataTypes.INTEGER,
    population: DataTypes.INTEGER
  }, {});
  Kingdom.associate = function(models) {
    // associations can be defined here
    Kingdom.hasOne(models.District)
    Kingdom.hasMany(models.Soldier)
  };
  //instance method 'Pasukan'
  Kingdom.prototype.jumlahPasukan = function() {
    return `${this.population} Pasukan`
  }
  
  return Kingdom;
};