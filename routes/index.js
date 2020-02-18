const express = require('express');
const router = express.Router();

//importar validator
const { body } = require('express-validator/check');

//importar controlador
const proyectosController = require
('../controllers/proyectosController');

module.exports = function() {
    //ruta home
    router.get('/', proyectosController.proyectosHome); 
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto',
        body('nombre').not().isEmpty().trim().escape(),
        proyectosController.nuevoProyecto);

    //listar proyecto
    router.get('/proyectos/:url', proyectosController.proyectoPorUrl);    
    return router;
}


