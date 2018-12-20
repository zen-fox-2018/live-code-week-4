'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Kingdoms', [{
      kingdomName: 'Endless',
      nameOfKing: `John`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kingdomName: 'Spartan',
      nameOfKing: `Tuti`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kingdomName: 'Rendezvous',
      nameOfKing: `Sukarno`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kingdomName: 'Battle Leader',
      nameOfKing: `Atras`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kingdomName: 'Kapak Merah',
      nameOfKing: `Patria`,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Kingdoms', null, {});
  }
};
