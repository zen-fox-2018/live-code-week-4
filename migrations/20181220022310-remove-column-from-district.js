'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });

      public removeColumn(tableName: String, attributeName: String, options: Object)
    */
   return queryInterface.removeColumn('Districts', 'population');
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.addColumn('Districts', 'population', {type: Sequelize.INTEGER});
  }
};
