'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kingdom = sequelize.define('Kingdom', {
    kingdomName: DataTypes.STRING,
    nameOfKing: DataTypes.STRING,
    DistrictId: DataTypes.INTEGER,
    population: DataTypes.INTEGER
  }, {});

  Kingdom.associate = function(models) {
    Kingdom.hasMany(models.Soldier, {
      foreignKey: "KingdomId"
    })
  };

  Kingdom.prototype.getDistrict = function(value) {
    if (!this.DistrictId) {
      this.DistrictId = "unnasigned";
    } else {
      Model.District.findByPk(DistrictId)
      .then(data => {
        this.DistrictId = data.districtName
      })
      .catch(err => {
        throw err
      })
    }
  }

  return Kingdom;
};