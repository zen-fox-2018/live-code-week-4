'use strict';

let obj = [{kingdomName: "Endless",
            nameOfking: "lucius",
            createdAt: new Date,
            updatedAt: new Date,
            population : 4
          },
          {kingdomName: "Spartan",
            nameOfking: "Draco",
            createdAt: new Date,
            updatedAt: new Date,
            population : 4
          },
          {kingdomName: "Rendezvous",
            nameOfking: "harry",
            createdAt: new Date,
            updatedAt: new Date,
            population : 4
          },
          {kingdomName: "Battle Leader",
            nameOfking: "genggis",
            createdAt: new Date,
            updatedAt: new Date,
            population : 4
          },
          {kingdomName: "Kapak Merah",
            nameOfking: "Gatot",
            createdAt: new Date,
            updatedAt: new Date,
            population : 4
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
