'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Kingdoms', [
     {
      kingdomName: "Endless"
    },
    {
      kingdomName: "Spartan"
    },
    {
      kingdomName: "Rendezvous"
    },
    {
      kingdomName: "Battle Leader"
    },
    {
      kingdomName: "Kapak Merah"
    }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Kingdoms', null, {});
  }
};
