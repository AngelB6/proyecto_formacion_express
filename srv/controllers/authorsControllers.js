const db = require("../database/conexion");

class AuthorsControllers {
  constructor() {}

  get(req, res) {
    try {
      db.query("SELECT * FROM authors;", (error, rows) => {
        if (error) {
          res.status(400).send(error);
        }
        res.status(200).json(rows);
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  getID(req, res) {
    try {
      const { id } = req.params;
      db.query("SELECT * FROM authors WHERE id = ?", [id], (error, rows) => {
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
      const { name, surname } = req.body;
      db.query(
        "INSERT INTO authors (name, surname) VALUES (?, ?)",
        [name, surname],
        (error, rows) => {
          if (error) {
            res.status(400).send(error);
          }
          res
            .status(201)
            .json({ message: `Inserción exitosa con ID:${rows.insertId}` });
        }
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  delete(req, res) {
    try {
      const { id } = req.params;
      db.query("DELETE FROM authors WHERE id = ?;", [id], (error, rows) => {
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

module.exports = new AuthorsControllers();
