'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Districts', 'KingdomId', {type: Sequelize.INTEGER})
  },
  
  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('Districts', 'KingdomId')
  }
};
