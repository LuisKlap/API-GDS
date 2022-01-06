'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('Binas', 'status', {

            type: Sequelize.STRING

        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Binas','status');
    }
};