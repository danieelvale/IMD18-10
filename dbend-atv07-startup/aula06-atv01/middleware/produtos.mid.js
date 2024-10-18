const { Produto, Tag } = require('../models');

async function criarProduto(req, res) {
  const { nome, descricao, preco, tags } = req.body;

  try {
  
    const produto = await Produto.create({ nome, descricao, preco });

    if (tags && tags.length > 0) {
      const tagInstances = await Promise.all(
        tags.map(async (tagName) => {
          const [tag] = await Tag.findOrCreate({ where: { nome: tagName } });
          return tag;
        })
      );

      await produto.setTags(tagInstances); 
    }

    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o produto' });
  }
}

module.exports = { criarProduto };

