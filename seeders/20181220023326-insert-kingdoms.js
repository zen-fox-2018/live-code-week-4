'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Kingdoms', [{
      kingdomName: 'Endless',
      nameOfKing: 'King A'
    }, {
      kingdomName: 'Spartan',
      nameOfKing: 'King B'
    }, {
      kingdomName: 'Rendezvous',
      nameOfKing: 'King C'
    }, {
      kingdomName: 'Battle Leader',
      nameOfKing: 'King D'
    }, {
      kingdomName: 'Kapak Merah',
      nameOfKing: 'King E'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Kingdoms', null, {});
  }
};
