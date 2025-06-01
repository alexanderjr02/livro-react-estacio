const express = require('express');
const router = express.Router();

const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// GET /livros - lista todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /livros - inclui um livro
router.post('/', async (req, res) => {
  try {
    const livro = req.body;
    await incluir(livro);
    res.json({ mensagem: 'Livro incluído com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /livros/:codigo - exclui um livro pelo _id
router.delete('/:codigo', async (req, res) => {
  try {
    const codigo = req.params.codigo;
    const result = await excluir(codigo);
    if (result.deletedCount > 0) {
      res.json({ mensagem: 'Livro excluído com sucesso' });
    } else {
      res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
