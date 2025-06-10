const express = require("express");
const routes = express.Router();
const publisherControllers = require("../controllers/publisherControllers");

routes.get("/", publisherControllers.get);

routes.post("/", publisherControllers.post);

routes
  .route("/:id")
  .get(publisherControllers.getID)
  .delete(publisherControllers.delete);

module.exports = routes;
