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
        nameOfKing: "Patria",
        DistrictId: null,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        kingdomName: "Spartan",
        nameOfKing: "Patria",
        DistrictId: null,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        kingdomName: "Rendezvous",
        nameOfKing: "Patria",
        DistrictId: null,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        kingdomName: "Battle Leader",
        nameOfKing: "Patria",
        DistrictId: null,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        kingdomName: "Kapak Merah",
        nameOfKing: "Patria",
        DistrictId: null,
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Kingdoms', null, {})
  }
};
