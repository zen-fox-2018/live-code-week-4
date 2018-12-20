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
      kingdomName: 'Endless',
      nameOfKing: 'Celyn Susanto',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      kingdomName: 'Spartan',
      nameOfKing: 'Theresia Coanata',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      kingdomName: 'Rendezvous',
      nameOfKing: 'Maria Ulfa',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      kingdomName: 'Battle Leader',
      nameOfKing: 'Yosephine',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      kingdomName: 'Kapak Merah',
      nameOfKing: 'Victor Huberta',
      createdAt: new Date,
      updatedAt: new Date
    },
    
  ], {});
},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Kingdoms', null, {});
  }
};
