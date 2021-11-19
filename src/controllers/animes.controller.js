//funciones especiaficas para cada ruta
//Entrar al modelo
const Anime = require("./../models/Anime");
const getAnimes = async (req, res) => {
  const animes = await Anime.find({});
  res.render("allAnimes", { animes });
};

const putAnimes = async (req, res) => {
  //destructuracion de objetos
  const { id } = req.params;
  //Datos del formulario body-parser
  const { img } = req.body;

  await Anime.findByIdAndUpdate(id, { img }, { new: true });

  //redirect que mande a una direccion nueva
  res.redirect("/animes");
};

module.exports = { getAnimes, putAnimes };
