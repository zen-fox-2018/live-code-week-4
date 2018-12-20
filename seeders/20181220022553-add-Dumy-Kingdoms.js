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
   let objDumyKingdom = [{
     kingdomName : "Endless",
     nameOfKing : "Herman"
   },{
    kingdomName : "Spartan",
    nameOfKing : "Christian"
  },{
    kingdomName : "Rendezvous",
    nameOfKing : "Fauzan"
  },{
    kingdomName : "Battle Leader",
    nameOfKing : "Rachmad"
  },{
    kingdomName : "Kapak Merah",
    nameOfKing : "Patria"
  }]

   return queryInterface.bulkInsert('Kingdoms', objDumyKingdom, {})
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
