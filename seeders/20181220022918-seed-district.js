'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Districts', [{
      districtName: "Prontera",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      districtName: "Payon",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      districtName: "Morroc",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      districtName: "Izlude",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      districtName: "Geffen",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      districtName: "Juno",
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ], {})
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
    return queryInterface.bulkDelete('Districts', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
