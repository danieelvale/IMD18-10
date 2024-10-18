'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      this.belongsToMany(models.Produto, { through: 'produto_tag', foreignKey: 'tagId' });
    }
  }
  
  Tag.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Tag',
  });

  return Tag;
};

