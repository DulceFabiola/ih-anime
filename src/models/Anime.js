//Importaciones
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
//molde donde vamos a crear la base de datos no relacional
//estrictamente tipado, le indicas el tipo de dato que va a necesitar en el schema
const animeSchema = new Schema(
  {
    name: String,
    description: String,
    Raiting: String,
    episode: Number,
    categorie: String,
    studio: String,
    img: String,
  },
  //los timestamps permiten obtener el tiempo exacto en el q se crea en la DB
  { timestamps: true }
);
//Modelo
const Anime = mongoose.model("Anime", animeSchema);

//Exportacion
//exportacion del modelo
module.exports = Anime;
