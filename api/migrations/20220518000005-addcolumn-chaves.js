'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('Chaves', 'ativo', {

            allowNull: false,
            type: Sequelize.BOOLEAN

        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Chaves','ativo');
    }
};