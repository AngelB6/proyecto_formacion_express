const db = require("../database/conexion");

class PublisherControllers {
  constructor() {}

  get(req, res) {
    try {
      db.query("SELECT * FROM publisher;", (error, rows) => {
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
      db.query("SELECT * FROM publisher WHERE id = ?;", [id], (error, rows) => {
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
      const { name, books_id } = req.body;
      db.query(
        "INSERT INTO publisher (name, books_id) VALUES (?, ?);",
        [name, books_id],
        (error, rows) => {
          if (error) {
            res.status(400).send(error);
          }
          res
            .status(201)
            .json({ message: `Inserción exitosa ID: ${rows.insertId}` });
        }
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  delete(req, res) {
    try {
      const { id } = req.params;
      db.query("DELETE FROM publisher WHERE id = ?", [id], (error, rows) => {
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

module.exports = new PublisherControllers();
