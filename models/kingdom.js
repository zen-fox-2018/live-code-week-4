'use strict';
// const models = require('./index')
// const genDis = require('../helper/genDistrict')
module.exports = (sequelize, DataTypes) => {
  const Kingdom = sequelize.define('Kingdom', {
    kingdomName: DataTypes.STRING,
    nameOfKing: DataTypes.STRING,
    DistrictId: DataTypes.INTEGER,
    population: DataTypes.INTEGER
  }, {});
  Kingdom.associate = function(models) {
    Kingdom.hasMany(models.Soldier)
    Kingdom.belongsTo(models.District, {foreignKey: 'DistrictId'})
  };

  Kingdom.prototype.getDis = function() {
    if (this.DistrictId == null) {
      return `unassign`
    } else {
      console.log('masukkk district')
      sequelize.models.District.findOne({where: {id: this.DistrictId}})
        .then(data => {
          console.log(data, 'districtnya')// g bisaaa dibilang gada kingdom id emng gada di districtny
          return data.dataValues.districtName
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  Kingdom.prototype.genPasukan = function() {
    // console.log(this.id, '==============')
    sequelize.models.Soldier.findAll({where: {KingdomId: this.id}})
      .then(data => {
        console.log(data.length, 'pasukannya')// kalo di console.log bisa
        return `${data.length} pasukan`
      })
      .catch(err => {
        console.log(err)
      })
  }
  return Kingdom;
};