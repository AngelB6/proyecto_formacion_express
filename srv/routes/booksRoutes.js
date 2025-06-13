const express = require("express");
const routes = express.Router();
const booksControllers = require("../controllers/booksControllers");

routes.get("/", booksControllers.getBooks);

routes.post("/", booksControllers.createBook);

routes
  .route("/:id")
  .get(booksControllers.getBookByID)
  .delete(booksControllers.deleteBook);

module.exports = routes;
