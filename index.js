const express = require('express');
const routes = require('./routes');
const path = require('path');

//creando app express
const app = express();

//archivos estáticos
app.use(express.static('public'));

//habilitar PUG
app.set('view engine', 'pug');

//añadir carpeta de vistas
app.set('views', path.join(__dirname, './views'));
app.use('/', routes() );


app.listen(3000);