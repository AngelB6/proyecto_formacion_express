class BooksControllers {
  constructor() {}

  get(req, res) {
    res.json({ message: "get BooksControllers" });
  }

  getID(req, res) {
    res.json({ message: "get ID BooksControllers" });
  }

  post(req, res) {
    res.json({ message: "post BooksControllers" });
  }

  delete(req, res) {
    res.json({ message: "delete BooksControllers" });
  }
}

module.exports = new BooksControllers();
