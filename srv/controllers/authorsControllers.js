const db = require("../database/conexion");

class AuthorsControllers {
  constructor() {}

  get(req, res) {
    res.json({ message: "get AuthorsControllers" });
  }

  getID(req, res) {
    res.json({ message: "get ID AuthorsControllers" });
  }

  post(req, res) {
    res.json({ message: "post AuthorsControllers" });
  }

  delete(req, res) {
    res.json({ message: "delete AuthorsControllers" });
  }
}

module.exports = new AuthorsControllers();
