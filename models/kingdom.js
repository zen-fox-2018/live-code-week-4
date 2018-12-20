'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kingdom = sequelize.define('Kingdom', {
    kingdomName: DataTypes.STRING,
    nameOfKing: DataTypes.STRING,
    DistrictId: DataTypes.INTEGER
  }, {});
  Kingdom.associate = function(models) {
    // associations can be defined here
    // Kingdom.belongsTo(models.District, {
    //   foreignKey : 'DistrictId'
    // }),
    Kingdom.hasMany(models.Soldier , {
      foreignKey : 'KingdomId'
    })
  };
  return Kingdom;
};
