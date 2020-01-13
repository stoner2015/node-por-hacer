const crear = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}
const actualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', 'crear una tarea por hacer', crear)
    .command('actualizar', 'actualiza el estado de una tarea', actualizar)
    .command('consultar', 'actualiza el estado de una tarea')
    .command('borrar', 'borra una tarea', crear)
    .help()
    .argv;

module.exports = {
    argv
}