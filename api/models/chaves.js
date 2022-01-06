'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chaves extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Chaves.hasMany(models.Bina, {
        foreignKey: 'chave'
      })
    }
  };
  Chaves.init({
    chave: DataTypes.STRING,
    chaveEncode: DataTypes.STRING,
    ativo: DataTypes.TINYINT
  }, {
    sequelize,
    defaultScope: {
      where: { ativo: true }
    },
    scopes: {
      todos: {where: {} }
    },
    modelName: 'Chaves',
  });
  return Chaves;
};