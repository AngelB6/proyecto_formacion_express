const { sequelize } = require("../database/db");

const Author = require("./authorsModels");
const Books = require("./booksModels");
const Genre = require("./genreModels");
const Publisher = require("./publisherModels");

// Un Author a muchos Books
Author.hasMany(Books, {
  foreignKey: "authors_id",
  as: "books",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// Muchos libros a un autor
Books.belongsTo(Author, { foreignKey: "authors_id", as: "author" });

// Un Genre a muchos Books
Genre.hasMany(Books, {
  foreignKey: "genre_id",
  as: "books",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});

// Muchos libros a un genero
Books.belongsTo(Genre, { foreignKey: "genre_id", as: "genre" });

// Un libro Book a muchos Publisher
Books.hasMany(Publisher, {
  foreignKey: "books_id",
  as: "publishers",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});

// Muchos publisher a un libro
Publisher.belongsTo(Books, { foreignKey: "books_id", as: "book" });

// Se puede exportar las relaciones para ser utilizadas en otras secciones
module.exports = {
  sequelize,
  Author,
  Books,
  Genre,
  Publisher,
};
