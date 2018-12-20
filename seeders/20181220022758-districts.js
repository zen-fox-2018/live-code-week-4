'use strict';
function obj(name){
  return {
    districtName: name,
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
      arr.push(obj("Prontera"))
      arr.push(obj("Payon"))
      arr.push(obj("Morroc"))
      arr.push(obj("Izlude"))
      arr.push(obj("Geffen"))
      arr.push(obj("Juno"))

      return queryInterface.bulkInsert('Districts', arr , {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Districts', null, {})
  }
};
