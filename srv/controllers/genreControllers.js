// Importamos el modelo
const Genre = require("../models/genreModels");

class GenreController {
  constructor() {}

  // Método para obtener todos los registros de genero
  async getGenres(req, res, next) {
    try {
      const genres = await Genre.findAll();
      res.status(200).json(genres);
    } catch (error) {
      next(error);
    }
  }

  // Método para obtener un solo registro de genero con ID
  async getGenreByID(req, res, next) {
    try {
      const { id } = req.params;

      if (isNaN(id)) {
        return res
          .status(400)
          .json({ message: "El ID debe ser de tipo numérico" });
      }

      const genre = await Genre.findByPk(id);

      if (!genre) {
        return res
          .status(404)
          .json({ message: `Genero con ID ${id} no encontrado` });
      }

      res.status(200).json(genre);
    } catch (error) {
      next(error);
    }
  }

  // Método para crear un nuevo registro de genero
  async createGenere(req, res, next) {
    try {
      const { genre } = req.body;

      if (!genre) {
        return res
          .status(400)
          .json({ message: "El nombre del genero es obligatorio" });
      }

      const newGenere = await Genre.create({ genre });

      res.status(201).json(newGenere);
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        return res.status(409).json({
          message: "Ya existe un genero con este nombre",
        });
      }
      next(error);
    }
  }

  // Método para eliminar un registro de genero
  async deleteGenere(req, res, next) {
    try {
      const { id } = req.params;

      if (isNaN(id)) {
        return res
          .status(400)
          .json({ message: "El ID debe ser de tipo numérico" });
      }

      const deletedRows = await Genre.destroy({
        where: { id: id },
      });

      if (deletedRows === 0) {
        return res.status(404).json({
          message: `El genero con ID ${id} no fue encontrado por lo que no fue posible eliminarlo`,
        });
      }

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new GenreController();
