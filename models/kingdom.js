'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kingdom = sequelize.define('Kingdom', {
    kingdomName: DataTypes.STRING,
    nameOfKing: DataTypes.STRING,
    DistrictId: DataTypes.INTEGER,
    population: DataTypes.INTEGER
  }, {});
  Kingdom.associate = function(models) {
    Kingdom.hasMany(models.Soldier, { foreignKey: 'KingdomId' })
    Kingdom.belongsTo(models.District, { foreignKey: 'DistrictId' })
  };

  Kingdom.prototype.getSoldiers = function() {
    return `${this.Soldiers.length} pasukan`  
  }

  Kingdom.prototype.getDistrict = function() {
    if (!this.DistrictId) {
      return 'unnasigned'
    } else {
      sequelize.models.District.findByPk(this.DistrictId)
        .then(name => {
          return name
        })
        .catch(err => {
          return err
        })
    }
  }

  Kingdom.getEnemy = function(districtId) {
    return new Promise ((resolve, reject) => {
      sequelize.models.Kingdom.findOne({
        where: {DistrictId: districtId},
        include: {model: sequelize.models.Soldier}
      })
        .then(enemy => {
          resolve(enemy)
        })
        .catch(err => {
          reject(err)
        })
    })

  }

  return Kingdom;
};