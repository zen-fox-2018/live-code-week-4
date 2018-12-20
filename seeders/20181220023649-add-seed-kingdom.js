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
   let kingdoms = [
     {kingdomName: "Endless",
     nameOfKing : 'maria',
     createdAt : new Date(),
   updatedAt : new Date ()},
     {kingdomName: "Spartan",
      nameOfKing : 'ulfa',
      createdAt : new Date(),
    updatedAt : new Date ()},
    {kingdomName: "Rendezvous",
    nameOfKing : 'mar',
    createdAt : new Date(),
  updatedAt : new Date ()},
    { kingdomName: "Battle Leader",
    nameOfKing : 'ul',
    createdAt : new Date(),
  updatedAt : new Date ()}, 
    {kingdomName: "Kapak Merah",
    nameOfKing : 'fa',
    createdAt : new Date(),
  updatedAt : new Date ()}]
   return queryInterface.bulkInsert('Kingdoms', kingdoms, {});
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
