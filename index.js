const express = require("express");
const app = express();
const fs = require("fs");
const db = require("./bd");
const fileupload = require("express-fileupload");
//const { string } = require("pg-format");
app.use(fileupload());

app.listen(3001, () => {
  console.log("Server en http://localhost:3001");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/formulario1.html");
});

app.post("/carga", async (req, res) => {
  let buffer = req.files.target_file.data;
  let datos = buffer.toString().split("\n");
  let parseDatos = datos.map((texto) => {
    let entries = texto.split(";").map((item) => {
      return item.trim();
    });
    return entries;
  });
  try {
    const respuesta = await db.AgregandoDatos(parseDatos);
    res.send(respuesta).status(201);
    res.end();
  } catch (error) {
    res.status(500).send(error);
  }
});

/* Falta lograr que se pueda leer cualquier archivo con el submit DOM */

/* Lector/Input txt to sql server */

/* csv = fs.readFileSync("eifrs202203_202203.txt") */

/* console.log(csv) */

/* let datos = csv.toString().split("\n"); */

/* Esquema para construir un objeto */
/* let esquema = ['trismestre', 'rut', 'razon_social', 'dato', 'um', 'plan_de_cuentas', 'monto', 'taxonomia', 'tipo_de_informe']
 */
/* 1.- Primer intento, devuelve objeto con propiedades y valores*/
/* let parseDatos = datos.map((texto) => {
  let entries = texto.split(";").map((item,index ) => {
    return [esquema[index], item.trim()]
  })

  return Object.fromEntries(entries)
})

console.log(parseDatos)
 */

/*2.- Segundo intento, devuelve arreglo sólo con valores */

/* csv = fs.readFileSync("eifrs202203_202203.txt");
let datos = csv.toString().split("\n");

let parseDatos = datos.map((texto) => {
  let entries = texto.split(";").map((item) => {
    return item.trim();
  });
  return entries;
});
console.log(parseDatos) */
/* async function inyectando() {
  const respuesta = await db.AgregandoDatos(parseDatos);
}

inyectando(); */


/* app.post("/upload", (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }
  const { file } = req.files;
  const data = file.data.toString('utf8');
  const rows = data.split('\n');
  const csv = rows.map((row) => row.replace("\r", "").split(';'));
  csv.map((row) => {
    row[0] = Math.round(row[0] / 5, 2);
    return row
  });
  Math.round()
  res.send(csv);
}); */


/* Revisar el video del profesor para agregar pantallazo */