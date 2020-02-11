exports.proyectosHomme = (req, res) => {
    res.render('index', {
       nombrePagina: 'Proyectos' 
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    })
}

exports.nuevoProyecto = (req, res) => {
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
            errores
        })
    }
}
