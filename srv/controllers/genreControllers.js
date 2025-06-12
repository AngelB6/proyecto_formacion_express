const db = require("../database/conexion");

class GenreControllers {
  constructor() {}

  get(req, res) {
    try {
      db.query("SELECT * FROM genre;", (error, rows) => {
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
      db.query("SELECT * FROM genre WHERE id = ?;", [id], (error, rows) => {
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
      const { genre } = req.body;
      db.query(
        "INSERT INTO genre (id, genre) VALUES (NULL,?);",
        [genre],
        (error, rows) => {
          if (error) {
            res.status(400).send(error);
          }
          res
            .status(201)
            .json({ message: `Creación exitosa ${rows.insertId}` });
        }
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  delete(req, res) {
    try {
      const { id } = req.params;
      db.query("DELETE FROM genre WHERE id = ?;", [id], (error, rows) => {
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

module.exports = new GenreControllers();
