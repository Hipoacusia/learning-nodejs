const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');


// Iniciar Express
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'../app/views'));

// Midelware
app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;
