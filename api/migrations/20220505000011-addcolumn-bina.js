'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('Binas', 'deletedAt', {

            allownull: true,
            type: Sequelize.DATE

        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Binas','deletedAt');
    }
};