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
   let objDummyDistricts = [{
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

  return queryInterface.bulkInsert('Districts', objDummyDistricts, {})


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
