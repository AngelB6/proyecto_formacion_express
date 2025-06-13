const Books = require("../models/booksModels");

class BooksController {
  constructor() {}

  async getBooks(req, res, next) {
    try {
      const books = await Books.findAll();
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }

  async getBookByID(req, res, next) {
    try {
      const { id } = req.params;

      if (isNaN(id)) {
        return res
          .status(400)
          .json({ message: "El ID debe ser de tipo numérico" });
      }

      const books = await Books.findByPk(id);

      if (!books) {
        return res
          .status(404)
          .json({ message: `Libro con ID ${id} no encontrado` });
      }

      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }

  async createBook(req, res, next) {
    try {
      const {
        title,
        rating,
        total_pages,
        published_date,
        genre_id,
        authors_id,
      } = req.body;

      if (
        !title ||
        !rating ||
        !total_pages ||
        !published_date ||
        !genre_id ||
        !authors_id
      ) {
        return res.status(400).json({ message: "Tienes campos vacíos" });
      }

      const newBook = await Books.create({
        title,
        rating,
        total_pages,
        published_date,
        genre_id,
        authors_id,
      });

      res.status(201).json(newBook);
    } catch (error) {
      next(error);
    }
  }

  async deleteBook(req, res, next) {
    try {
      const { id } = req.params;

      if (isNaN(id)) {
        return res
          .status(400)
          .json({ message: "El ID debe ser de tipo numérico" });
      }

      const deletedRows = await Books.destroy({
        where: { id: id },
      });

      if (deletedRows === 0) {
        return res.status(404).json({
          message: `El libro con ID ${id} no fue encontrado por lo que no fue posible eliminarlo`,
        });
      }

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new BooksController();
