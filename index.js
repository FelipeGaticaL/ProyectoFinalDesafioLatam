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
  let datos = buffer.toString('utf8').split("\n");

  let parseDatos = datos.map((texto) => {
      let entries = texto.split(";").map((item) => {
        return item.trim();
      });
      return entries;
      });

      //Eliminamos el último elemento del arreglo de arrelgos, porque viene vacío y esto afecta la carga final.
    parseDatos.pop()
    /* parseDatos.splice(-1,1) --> También funciona*/
    //console.log(parseDatos[Object.keys(parseDatos)[Object.keys(parseDatos).length - 1]]) //Obteniendo último valor


    try {
        const respuesta = await db.AgregandoDatos(parseDatos);
        res.send(respuesta).status(201);
        res.end();
      } catch (error) {
        res.status(500).send(error);
      }
});

