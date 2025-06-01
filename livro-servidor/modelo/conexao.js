const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect('mongodb://localhost:27017/livraria', options)
  .then(() => console.log('MongoDB conectado!'))
  .catch((err) => console.error('Erro ao conectar MongoDB:', err));

module.exports = mongoose;
