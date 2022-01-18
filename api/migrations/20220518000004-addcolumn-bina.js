'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('Binas', 'status', {

            allowNull: false,
            type: Sequelize.STRING

        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Binas','status');
    }
};