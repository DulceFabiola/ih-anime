const express = require("express");
//importamos el ruteador
const router = express.Router();
const animeController = require("./../controllers/animes.controller");
//Crear Rutas
//Routes
//Obtener animes Ruta para mostrat en pantalla
router.get("/", animeController.getAnimes);
//query parameters. info q se pasa atravez de la url
router.put("/:id/update", animeController.putAnimes);
//exportar el router
module.exports = router;
