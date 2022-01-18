'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Binas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numeroChamador: {
        type: Sequelize.STRING
      },
      numeroReceptor: {
        type: Sequelize.STRING
      },
      dataRequisicao: {
        type: Sequelize.DATEONLY
      },
      deviceId: {
        type: Sequelize.STRING
      },
      chave: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Chaves', key: 'id' }
      },
      status: {
        AllowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Binas');
  }
};