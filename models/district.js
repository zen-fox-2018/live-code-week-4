'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    districtName: DataTypes.STRING
  }, {});
  District.associate = function(models) {
    District.hasOne(models.Kingdom)
    District.belongsTo(models.Kingdom)
    // associations can be defined here
  };

  District.checkKingdom = function () {
    return new Promise ((resolve, reject) => {
      District.getKingdom()
        .then(kingdom => {
          if (kingdom) {
            resolve(true)
          } else {
            resolve(false)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  return District;
};