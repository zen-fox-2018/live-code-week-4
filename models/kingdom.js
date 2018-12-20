'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kingdom = sequelize.define('Kingdom', {
    kingdomName: DataTypes.STRING,
    nameOfKing: DataTypes.STRING,
    DistrictId: { 
      type : DataTypes.INTEGER,
      allowNull : true
    },
    population: {
      type: DataTypes.INTEGER,
      defaultValue: 4
    }
  }, {});
  Kingdom.associate = function(models) {
    // associations can be defined here
    Kingdom.hasMany(models.Soldier)
    Kingdom.belongsTo(models.District)
  };

  Kingdom.prototype.pasukan = function () {
    let total = 0
    this.Soldiers.forEach( a => {
      total++
    })
    return total + ' pasukan'
  }
  return Kingdom;
};