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
    Kingdom.belongsTo(models.District, {foreignKey : 'DistrictId'});
    Kingdom.hasMany(models.Soldier, {foreignKey : 'kingdomId'});
  };

  Kingdom.checkDistrict = function (districtId) {
    let promise = new Promise(function (resolve, reject) {
      Kingdom.findOne({where: {DistrictId: districtId}})
        .then(function (kingdom) {
          if (kingdom === null) {
            resolve(null)
          }
          else {
            resolve(kingdom.id)
          }
        })
        .catch(function(err) {
          reject(err)
        })
    })
    return promise
  }
  return Kingdom;
};