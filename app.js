const { crearArchivo } = require("./helpers/multiplicar");
const colors = require("colors");
const argv = require("./config/yargs");

console.clear();

// console.log(argv);

// console.log("base: yargs", argv.b);
//en el process.argv podremos ver las variables que enviamos desde consola
//nunca hacer de esta manera
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// const base = 6;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
