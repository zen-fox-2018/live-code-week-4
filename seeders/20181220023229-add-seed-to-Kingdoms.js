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
    let seedData = [
      {
        kingdomName: 'Endless',
        nameOfKing: 'Raja End',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        kingdomName: 'Spartan',
        nameOfKing: 'Raja Leonidas',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        kingdomName: 'Rendezvous',
        nameOfKing: 'Raja Rendez',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        kingdomName: 'Battle Leader',
        nameOfKing: 'Raja Battle',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        kingdomName: 'Kapak Merah',
        nameOfKing: 'Raja Wiro',
        createdAt: new Date,
        updatedAt: new Date
      },
    ]
    return queryInterface.bulkInsert('Kingdoms', seedData, {})
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
