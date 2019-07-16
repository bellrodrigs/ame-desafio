const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conectando ao banco
// mongoose.connect('mongodb+srv://adminMaster:846854@cluster0-xiwb7.mongodb.net/plannets_starwars?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/plannets_starwars');




//Carrega Models
const Planet = require('./models/plannet');

//Carregar as rotas
const indexRoute = require('./routes/index-route');
const plannetsRoute = require('./routes/plannets-route');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/plannets', plannetsRoute);

module.exports = app;