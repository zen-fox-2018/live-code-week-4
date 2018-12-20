'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let insert  = [
      {
        districtName: "Prontera"
      },{
         districtName: "Payon"
      },{
        districtName: "Morroc"
      },{
        districtName: "Izlude"
      },{
        districtName: "Geffen"
      },{
         districtName: "Juno"
      }]

      return queryInterface.bulkInsert("Districts", insert, {})
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
    return queryInterface.bulkDelete("Districts", null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
