const express = require("express");
const routes = express.Router();
const booksControllers = require("../controllers/booksControllers");

routes.get("/", booksControllers.get);

routes.post("/", booksControllers.post);

routes
  .route("/:id")
  .get(booksControllers.getID)
  .delete(booksControllers.delete);

module.exports = routes;
