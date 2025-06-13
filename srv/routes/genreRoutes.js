// Importamos express para el uso de las rutas para el mapeo
const express = require("express");
const routes = express.Router();

// Importamos el controlador con los métodos
const genreController = require("../controllers/genreControllers");

// Definimos las rutas y el método perteneciente a esa ruta
routes.get("/", genreController.getGenres);

routes.post("/", genreController.createGenere);

routes
  .route("/:id")
  .get(genreController.getGenreByID)
  .delete(genreController.deleteGenere);

// Exportamos las subrutas para el index que controla las rutas principales
module.exports = routes;
