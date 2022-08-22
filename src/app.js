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
app.use('/api/v1/bdinput', require('./routes/bdinput'));
app.use('/api/v1/table', require('./routes/table'));
