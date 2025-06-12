const db = require("../database/conexion");

class BooksControllers {
  constructor() {}

  get(req, res) {
    try {
      db.query("SELECT * FROM books;", (error, rows) => {
        if (error) {
          res.status(400).send(error);
        }
        res.status(200).json(rows);
      });
    } catch (error) {
      if (error) {
        res.status(500).send(error.message);
      }
    }
  }

  getID(req, res) {
    try {
      const { id } = req.params;
      db.query("SELECT * FROM books WHERE id = ?;", [id], (error, rows) => {
        if (error) {
          res.status(400).send(error);
        }
        res.status(200).json(rows[0]);
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  post(req, res) {
    try {
      const {
        title,
        rating,
        total_pages,
        published_date,
        genre_id,
        authors_id,
      } = req.body;
      db.query(
        "INSERT INTO books (title, rating, total_pages, published_date, genre_id, authors_id) VALUES (?,?,?,?,?,?);",
        [title, rating, total_pages, published_date, genre_id, authors_id],
        (error, rows) => {
          if (error) {
            res.status(400).send(error);
          }
          res
            .status(200)
            .json({ message: `Inserción correcta con ID:${rows.insertId}` });
        }
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  delete(req, res) {
    try {
      const { id } = req.params;
      db.query("DELETE FROM books WHERE id = ?;", [id], (error, rows) => {
        if (error) {
          res.status(400).send(error);
        }
        res.status(200).json({ message: "Eliminación exitosa" });
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = new BooksControllers();
