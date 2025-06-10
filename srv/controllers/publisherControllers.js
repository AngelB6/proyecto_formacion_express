const db = require("../database/conexion");

class PublisherControllers {
  constructor() {}

  get(req, res) {
    res.json({ message: "get PublisherControllers" });
  }

  getID(req, res) {
    res.json({ message: "get ID PublisherControllers" });
  }

  post(req, res) {
    res.json({ message: "post PublisherControllers" });
  }

  delete(req, res) {
    res.json({ message: "delete PublisherControllers" });
  }
}

module.exports = new PublisherControllers();
