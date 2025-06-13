const Authors = require("../models/authorsModels");

class AuthorsController {
  constructor() {}

  async getAuthors(req, res, next) {
    try {
      const authors = await Authors.findAll();
      res.status(200).json(authors);
    } catch (error) {
      next(error);
    }
  }

  async getAuthorByID(req, res, next) {
    try {
      const { id } = req.params;

      if (isNaN(id)) {
        return res
          .status(400)
          .json({ message: "El ID debe ser de tipo numérico" });
      }

      const author = await Authors.findByPk(id);

      if (!author) {
        return res
          .status(404)
          .json({ message: `Autor con ID ${id} no encontrado` });
      }

      res.status(200).json(author);
    } catch (error) {
      next(error);
    }
  }

  async createAuthor(req, res, next) {
    try {
      const { name, surname } = req.body;

      if (!name || !surname) {
        return res.status(400).json({
          message: "Los datos nombre o apellido no pueden estar vacíos",
        });
      }

      const newAuthor = await Authors.create({ name, surname });

      res.status(201).json({ newAuthor });
    } catch (error) {
      next(error);
    }
  }

  async deleteAuthor(req, res, next) {
    try {
      const { id } = req.params;
      if (isNaN(id)) {
        return res
          .status(400)
          .json({ message: "El ID debe ser de tipo numérico" });
      }

      const deletedRows = await Authors.destroy({
        where: { id: id },
      });

      if (deletedRows === 0) {
        return res
          .status(404)
          .json({ message: `Autor con ID ${id} no encontrado` });
      }

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthorsController();
