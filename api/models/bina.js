'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bina.belongsTo(models.Chaves, {
        foreignKey: 'chave'
      })
    }
  };
  Bina.init({
    numeroChamador:{ 
      type: DataTypes.STRING,
      validate: {
        
        // isNumeric: {
        //   args: true,
        //   msg: 'Número de celular inválido!'
        // },

        funcaoValidadora: function(dado) {
          console.log(dado.length)
          if (dado.length != 11) throw new Error ('Número de celular inválido!')
        }
        
      }
    },
    numeroReceptor:{ 
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado) {
          console.log(dado.length)
          if (dado.length != 11) throw new Error ('Número de celular inválido!')
        }
      }
    },
    dataRequisicao: DataTypes.DATEONLY,
    deviceId: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    defaultScope: {
      where: { status: 'confirmado' }
    },
    scopes: {
      todos: {where: {} }
    },
    modelName: 'Bina',
  });
  return Bina;
};