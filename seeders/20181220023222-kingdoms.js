'use strict';

function obj(name){
  return {
    kingdomName: name,
    nameOfKing: "King " + name,
    createdAt : new Date,
    updatedAt : new Date
  }
}

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

   let arr = []
   arr.push(obj("Endless"))
   arr.push(obj("Spartan"))
   arr.push(obj("Rendezvous"))
   arr.push(obj("Battle Leader"))
   arr.push(obj("Kapak Merah"))

   return queryInterface.bulkInsert('Kingdoms', arr , {});
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
