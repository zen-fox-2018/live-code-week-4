'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Kingdoms', 'population', { type: Sequelize.INTEGER, defaultValue: 4 });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Kingdoms', 'population');
  }
};
