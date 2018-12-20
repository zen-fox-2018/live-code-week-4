'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Districts', 'population');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Districts', 'population', { type: Sequelize.INTEGER });
  }
};
