'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Districts', [
     {
      districtName: "Prontera"
    },
    {
      districtName: "Payon"
    },
    {
      districtName: "Morroc"
    },
    {
      districtName: "Izlude"
    },
    {
      districtName: "Geffen"
    },
    {
      districtName: "Juno"
    }], {})
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Districts', null, {});
  }
};
