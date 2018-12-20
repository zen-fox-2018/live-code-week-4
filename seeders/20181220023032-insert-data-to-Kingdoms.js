'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let insert = [
      {
        kingdomName: "Endless",
        nameOfKing: "januar"
      },
      {
        kingdomName: "Spartan",
        nameOfKing: "venecia"
      },
      {
        kingdomName: "Rendezvous",
      nameOfKing: "taqi"
      },
      {
        kingdomName: "Battle Leader",
        nameOfKing: "patria"
      },
      {
        kingdomName: "Kapak Merah",
        nameOfKing: "zia"
      }
    ]
    return queryInterface.bulkInsert("Kingdoms", insert, {})
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
    return queryInterface.bulkDelete("Kingdoms", null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
