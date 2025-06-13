const express = require("express");
const routes = express.Router();
const publisherControllers = require("../controllers/publisherControllers");

routes.get("/", publisherControllers.getPublishers);

routes.post("/", publisherControllers.createPublisher);

routes
  .route("/:id")
  .get(publisherControllers.getPublisherByID)
  .delete(publisherControllers.deletePublisher);

module.exports = routes;
