'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kingdom = sequelize.define('Kingdom', {
    kingdomName: DataTypes.STRING,
    nameOfking: DataTypes.STRING,
    DistrictId: DataTypes.INTEGER,
    population : { type : Sequelize.INTEGER,
      defaulValue : 4,
      allowNull: false}
  }, {});
  Kingdom.associate = function(models) {
    // associations can be defined here
  };
  return Kingdom;
};