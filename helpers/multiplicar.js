//leer la documentacion de node para poder ver las dependencias que podremos utilizar: https://nodejs.org/dist/latest-v18.x/docs/api/
const fs = require("node:fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }

    if (listar) {
      console.log("=================".green);
      console.log(`${"tabla del".green} ${colors.blue(Number(base))}`);
      console.log("=================".green);
      console.log(consola);
    }

    await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

//para poder exportar funciones en node se debe utilizar module.exports y dentro de un objeto colocar la funcion que queremos exportar para poder ser utilizada en otro archivo

module.exports = {
  crearArchivo,
};
