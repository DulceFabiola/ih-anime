//1.IMPORTACIONES, VARIABLES GLOBALES
const express = require("express");
const app = express();
require("dotenv").config();
//otra forma de inicializar la ruta
const path = require("path");
const connectDB = require("./config/db");
//2. MIDDELWARES
//Es una funcion que se ejectuta despues de recibir una peticion y antes de dar una respuesta
//Trabajar con archivos estaticos
// app.use(express.static(__dirname + "/public")); ==app.use(express.static(path.join(__dirname, 'public')));
//trabajar con archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

//Configuraciones
//de donde saco las vistas
app.set("views", path.join(__dirname, "views"));
//renderiza con el motor de vistas de hbs
app.set("view engine", "hbs");

connectDB();
//3.RUTAS
//Home
app.get("/", (req, res) => {
  res.render("index");
});

//4.SERVIDOR
app.listen(process.env.PORT, () => {
  console.log(
    `Servidor levantado en el puerto http://localhost:${process.env.PORT}`
  );
});
