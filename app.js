const color = require('colors');
const argumentoConsola = process.argv[2];
let base = 0;

const argumentosOK = () => {
    let valido = false;
    if (argumentoConsola === undefined) {
        console.log('Debe definir el argumento y su valor, ej: "--base=5"'.red);
    } else {
        const argumentos = argumentoConsola.split('=');
        const argumentoNombre = argumentos[0];
        base = parseInt(argumentos[1]);

        if (argumentoNombre != '--base')
            console.log('Nombre de argumento no reconocido'.red);
        else if (!Number.isInteger(base))
            console.log('La base debe ser numérica'.red);
        else
            valido = true;
    }
    return valido;
}

const generarTabla = (pbase) => {
    let tabla = '';
    for (let i = 1; i < 11; i++) {
        tabla += `${pbase} x ${i} = ${pbase*i} \n`;
    }
    return tabla;
}

if (argumentosOK()) {
    console.log('Fundamentos de Node - Tarea 5'.rainbow);
    console.log(`Tabla del ${base}`.green);
    console.log(generarTabla(base).yellow);
}