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
    nameOfKing: 'Aa',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    kingdomName: 'Spartan',
    nameOfKing: 'Vene',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    kingdomName: 'Rendezvous',
    nameOfKing: 'Cia',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    kingdomName: 'Battle Leader',
    nameOfKing: 'Haha',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    kingdomName: 'Kapak Merah',
    nameOfKing: 'Merah',
    createdAt: new Date,
    updatedAt: new Date
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
