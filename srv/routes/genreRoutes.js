const express = require("express");
const routes = express.Router();
const genreControllers = require("../controllers/genreControllers");

routes.get("/", genreControllers.get);

routes.post("/", genreControllers.post);

routes
  .route("/:id")
  .get(genreControllers.getID)
  .delete(genreControllers.delete);

module.exports = routes;
