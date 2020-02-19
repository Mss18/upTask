const Proyectos = require('../models/Proyectos');


exports.proyectosHome = async(req, res) => {
    const proyectos = await Proyectos.findAll();

    res.render('index', {
       nombrePagina: 'Proyectos',
       proyectos 
    });
}

exports.formularioProyecto = async (req, res) => {
    const proyectos = await Proyectos.findAll();

    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto',
        proyectos
    })
}

exports.nuevoProyecto = async(req, res) => {
    const proyectos = await Proyectos.findAll();

    //Mostrar por consola texto de usuario
    // console.log(req.body);

    //validar que el input no esté vacio
    const { nombre } = req.body;

    let errores = [];

    if (!nombre) {
        errores.push({'texto': 'Añade un nombre al proyecto'})
    }

    //en caso de error
    if(errores.length > 0) {
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores,
            proyectos
        })        
    } else {
        //si no hay errores, insertamos en la BD
        // const url = slug(nombre).toLowerCase();
        const proyecto = await Proyectos.create({ nombre });
        res.redirect('/');
    }
}

exports.proyectoPorUrl = async (req, res, next) => {
    const proyectos = await Proyectos.findAll();

    const proyecto = await Proyectos.findOne({
        where: {
            url: req.params.url
        }
    });
    
    if(!proyecto) return next();

    
    //render a la vista
    res.render('tareas', {
        nombrePagina: 'Tareas del proyecto',
        proyecto,
        proyectos
    })
}

exports.formularioEditar = async(req, res) => {
    const proyectos = await Proyectos.findAll();

    //render a la vista
    res.render('nuevoProyecto', {
        nombrePagina: 'Editar Proyecto'
    })
}