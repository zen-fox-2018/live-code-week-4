'use strict';

let obj = [{districtName : 'Prontera',
            createdAt: new Date,
            updatedAt: new Date
            
            },
            {districtName : 'Payon',
            createdAt: new Date,
            updatedAt: new Date
        },
            {districtName : 'Morroc',
            createdAt: new Date,
            updatedAt: new Date
          },
            {districtName : 'Izlude',
            createdAt: new Date,
            updatedAt: new Date
           },
            {districtName : 'Geffen',
            createdAt: new Date,
            updatedAt: new Date
          },
            {districtName : 'Juno',
            createdAt: new Date,
            updatedAt: new Date
        }
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
   return queryInterface.bulkInsert('Districts', obj)
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
