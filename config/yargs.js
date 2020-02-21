const opciones = {
    base: {
        demand: true,
        alias: 'b',

    },
    limite: {
        alias: 'l',
        default: 10
    }

};

const argv = require('yargs')
    .command('listar', 'imprimer en consola la tabla de multiplicar', opciones)
    .command('crear', 'genera un archivo con la tabla de multiplicar', opciones)
    .help()
    .argv


module.exports = {
    argv
}