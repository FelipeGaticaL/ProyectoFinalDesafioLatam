const express = require("express");
const exphbs = require("express-handlebars");
const expressFileUpload = require("express-fileupload");
const path = require("path");
require('dotenv').config();

const db = require("./db/consultasEEFF");
const { Console } = require("console");


const app = express();

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor encendido: http://localhost:${PORT}`));

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(expressFileUpload());

// public folders
app.use(express.static(path.join(__dirname, "..", "/public")));
app.use("/bootstrap", express.static(path.join(__dirname, "..", "/node_modules/bootstrap/dist")));
app.use("/axios", express.static(path.join(__dirname, "..", "/node_modules/axios/dist")));
app.use("/sweetalert2", express.static(path.join(__dirname, "..", "/node_modules/sweetalert2/dist")));

// template engine
app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
  })
);
app.set("view engine", "hbs");

// view routes
app.use('/', require('./routes/views'));

// api routes
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/charts', require('./routes/charts'));

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
        res.status(200).redirect("/user/carga");
      } catch (error) {
        res.status(500).send(error);
      }
});


app.post("/cargaInfoSelect", async (req, res) => {
  try {
      const respuesta = await db.CreaTabla();
      res.status(200).redirect("/user/chart");
    } catch (error) {
      res.status(500).send(error);
    }
});


app.post("/EliminarTodo", async (req, res) => {

  try {
      const respuesta = await db.EliminarTodo();
      res.status(200).redirect("/user/carga");
    } catch (error) {
      res.status(500).send(error);
    }
});