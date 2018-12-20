'use strict';

let obj = [{districtName : 'Prontera',
            createdAt: new Date,
            updatedAt: new Date,
            population : 4
            },
            {districtName : 'Payon',
            createdAt: new Date,
            updatedAt: new Date,
            population : 4 },
            {districtName : 'Morroc',
            createdAt: new Date,
            updatedAt: new Date,
            population : 4 },
            {districtName : 'Izlude',
            createdAt: new Date,
            updatedAt: new Date,
            population : 4 },
            {districtName : 'Geffen',
            createdAt: new Date,
            updatedAt: new Date,
            population : 4 },
            {districtName : 'Juno',
            createdAt: new Date,
            updatedAt: new Date,
            population : 4 }
          ]
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
   return queryInterface('Districts', obj)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Districts', null, {});
  }
};
