const mongoose = require('./conexao');

const LivroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  ano: { type: Number, required: true }
}, {
  collection: 'livros'
});

const Livro = mongoose.model('Livro', LivroSchema);

module.exports = Livro;
