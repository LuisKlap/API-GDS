'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('binas',[
      {
      numeroChamador: '41996497058',
      numeroReceptor: '41975824980',
      dataRequisicao: '2021/12/29',
      deviceId: 'ascpo5asca6',
      chave: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      numeroChamador: '41958782501',
      numeroReceptor: '41985654575',
      dataRequisicao: '2021/12/29',
      deviceId: 'd6b54zdbf644',
      chave: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('binas', null, {});

  }
};
