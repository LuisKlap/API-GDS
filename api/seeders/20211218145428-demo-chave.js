'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('chaves',[
      {
      chave: 'gamavi123',
      chaveEncode: 'Z2FtYXZpMTIz',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      chave: 'gamavi123',
      chaveEncode: 'Z2FtYXZpMTIz',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('chaves', null, {});

  }
};
