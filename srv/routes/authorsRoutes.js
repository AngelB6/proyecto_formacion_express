const express = require("express");
const routes = express.Router();

const authorsController = require("../controllers/authorsControllers");

routes.get("/", authorsController.getAuthors);

routes.post("/", authorsController.createAuthor);

routes
  .route("/:id")
  .get(authorsController.getAuthorByID)
  .delete(authorsController.deleteAuthor);

module.exports = routes;
