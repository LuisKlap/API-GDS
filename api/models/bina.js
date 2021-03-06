'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bina extends Model {

    static associate(models) {
      Bina.belongsTo(models.Chaves, {
        foreignKey: 'chave'
      })
    }
  };

  Bina.init({
    numeroChamador: {
      type: DataTypes.STRING,
      validate: {

        funcaoValidadora: function (dado) {
          if (dado.length != 11) throw new Error('Número de celular inválido!')
        }

      }
    },
    numeroReceptor: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado) {
          if (dado.length != 11) throw new Error('Número de celular inválido!')
        }
      }
    },
    dataRequisicao: DataTypes.DATEONLY,
    deviceId: {
      type: DataTypes.STRING,
      unique: true
    },
    status: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    defaultScope: {
      where: { status: 'confirmado' }
    },
    scopes: {
      todos: { where: {} }
    },
    modelName: 'Bina',
  });
  return Bina;
};