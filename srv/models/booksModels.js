const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");

const Books = sequelize.define(
  "Books",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El titulo del libro no puede estar vacío",
        },
        len: {
          args: [3, 20],
          msg: "El titulo del libro debe tener entre 3 y 20 caracteres",
        },
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "El rating del libro debe ser un número entero",
        },
        min: 1,
        max: 5,
      },
    },
    total_pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "El número total de páginas debe ser un número entero",
        },
        min: 1,
        max: 9999,
      },
    },
    published_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: { msg: "La fecha de publicación debe ser una fecha válida" },
        isBefore: new Date().toISOString().split("T")[0],
      },
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    authors_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "books",
  }
);

module.exports = Books;
