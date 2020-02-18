const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

//helpers con varias funciones
const helpers = require('./helpers');

//creando conexión a BD
const db = require('./config/db');

//Importando Modelo
require('./models/Proyectos');

db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));

//creando app express
const app = express();

//archivos estáticos
app.use(express.static('public'));

//habilitar PUG
app.set('view engine', 'pug');

//añadir carpeta de vistas
app.set('views', path.join(__dirname, './views'));

//pasar var dump
app.use((req, res, next) => {
    res.locals.vardump = helpers.vardump;
    next();
});

//middleware para pasar el año
/* app.use((req, res, next) => {
    const fecha = new Date();
    res.locals.year = fecha.getFullYear;
    next();
}); */

//bodyParser para datos del formulario
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes() );

app.listen(3000);