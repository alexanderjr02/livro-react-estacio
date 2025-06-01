var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');  // removido pois não usado
var logger = require('morgan');
var cors = require('cors');

var livrosRouter = require('./routes/livros');

var app = express();

app.use(cors());  // Permite CORS para todas as origens

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());  // removido pois não usado

// Rota para /livros vem primeiro para evitar bloqueio pela rota raiz
app.use('/livros', livrosRouter);

// Rota raiz padrão
app.use('/', (req, res) => {
  res.send('Servidor rodando - acesse /livros para API de livros');
});

module.exports = app;
