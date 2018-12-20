'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Kingdoms', [
    {
      kingdomName: "Endless",
      nameOfKing: "Patri",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      kingdomName: "Spartan",
      nameOfKing: "Ibenk",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      kingdomName: "Rendezvous",
      nameOfKing: "Ulfa",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      kingdomName: "Battle Leader",
      nameOfKing: "Rama",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      kingdomName: "KapakMerah",
      nameOfKing: "Maman",
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ], {})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Kingdoms', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
