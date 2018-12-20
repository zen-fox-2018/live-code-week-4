'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Kingdoms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kingdomName: {
        type: Sequelize.STRING
      },
      nameOfKing: {
        type: Sequelize.STRING
      },
      DistrictId: {
        type: Sequelize.INTEGER,
        allowNull : true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      population: { 
        type : Sequelize.INTEGER,
        defaultValue : 4
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Kingdoms');
  }
};