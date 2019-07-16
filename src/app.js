const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const dburi = require('./config/config.json').URI_DB;

const app = express();
const router = express.Router();

(async () => {
    try {
        await mongoose.connect(dburi,  { useNewUrlParser: true });
        console.log('banco conectado!!');
    } catch(err) {
        console.log("Não conectou!!!");
    }
    
    //Import Model
    require('./models/plannet');
    
    const indexRoute = require('./routes/index-route');
    const plannetsRoute = require('./routes/plannets-route');

    app.use(bodyParse.json());
    app.use(bodyParse.urlencoded({ extended: false }));


    app.use('/', indexRoute);
    app.use('/plannets', plannetsRoute);

})();


module.exports = app;