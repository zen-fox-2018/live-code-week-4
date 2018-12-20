'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Kingdoms', [
      {
        kingdomName: "Endless",
        nameOfKing: "San Mia"
      },
      {
        kingdomName: "Spartan",
        nameOfKing: "Egnigem Cenia"
      },
      {
        kingdomName: "Rendezvous",
        nameOfKing: "Lord Icarus X"
      },
      {
        kingdomName: "Battle Leader",
        nameOfKing: "Doppelganger"
      },
      {
        kingdomName: "Kapak Merah",
        nameOfKing: "Wiro Sableng"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
