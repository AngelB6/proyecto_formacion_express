class GenreControllers {
  constructor() {}

  get(req, res) {
    res.json({ message: "get GenreController" });
  }

  getID(req, res) {
    res.json({ message: "get ID GenreController" });
  }

  post(req, res) {
    res.json({ message: "post GenreController" });
  }

  delete(req, res) {
    res.json({ message: "delete GenreController" });
  }
}

module.exports = new GenreControllers();
