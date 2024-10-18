'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    static associate(models) {
      this.belongsToMany(models.Tag, { through: 'produto_tag', foreignKey: 'produtoId' });
    }
  }

  Produto.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.REAL,
  }, {
    sequelize,
    modelName: 'Produto',
  });

  return Produto;
};
