const express = require("express");
const routes = express.Router();
const authorsControllers = require("../controllers/authorsControllers");

routes.get("/", authorsControllers.get);

routes.post("/", authorsControllers.post);

routes
  .route("/:id")
  .get(authorsControllers.getID)
  .delete(authorsControllers.delete);

module.exports = routes;
