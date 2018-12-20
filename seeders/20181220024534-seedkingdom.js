'use strict';

let obj = [{kingdomName: "Endless",
            nameOfking: "lucius",
            createdAt: new Date,
            updatedAt: new Date
          },
          {kingdomName: "Spartan",
            nameOfking: "Draco",
            createdAt: new Date,
            updatedAt: new Date
          },
          {kingdomName: "Rendezvous",
            nameOfking: "harry",
            createdAt: new Date,
            updatedAt: new Date
          },
          {kingdomName: "Battle Leader",
            nameOfking: "genggis",
            createdAt: new Date,
            updatedAt: new Date
          },
          {kingdomName: "Kapak Merah",
            nameOfking: "Gatot",
            createdAt: new Date,
            updatedAt: new Date
          }]


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
      return queryInterface.bulkInsert('Kingdoms', obj)
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
