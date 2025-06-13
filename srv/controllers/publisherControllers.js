const Publisher = require("../models/publisherModels");

class PublisherController {
  constructor() {}

  async getPublishers(req, res, next) {
    try {
      const books = await Publisher.findAll();
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }

  async getPublisherByID(req, res, next) {
    try {
      const { id } = req.params;

      if (isNaN(id)) {
        return res
          .status(400)
          .json({ message: "El ID debe ser de tipo numérico" });
      }

      const publishers = await Publisher.findByPk(id);

      if (!publishers) {
        return res
          .status(404)
          .json({ message: `Editorial con ID ${id} no encontrado` });
      }

      res.status(200).json(publishers);
    } catch (error) {
      next(error);
    }
  }

  async createPublisher(req, res, next) {
    try {
      const { name, books_id } = req.body;

      if (!name || !books_id) {
        return res.status(400).json({ message: "Tienes campos vacíos" });
      }

      const newPublisher = await Publisher.create({
        name,
        books_id,
      });

      res.status(201).json(newPublisher);
    } catch (error) {
      next(error);
    }
  }

  async deletePublisher(req, res, next) {
    try {
      const { id } = req.params;

      if (isNaN(id)) {
        return res
          .status(400)
          .json({ message: "El ID debe ser de tipo numérico" });
      }

      const deletedRows = await Publisher.destroy({
        where: { id: id },
      });

      if (deletedRows === 0) {
        return res.status(404).json({
          message: `La editorial con ID ${id} no fue encontrado por lo que no fue posible eliminarlo`,
        });
      }

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PublisherController();
