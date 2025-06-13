const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");

const Publisher = sequelize.define(
  "Publisher",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El nombre del publisher no puede estar vacío",
        },
        len: {
          args: [3, 30],
          msg: "El nombre del publisher debe tener entre 3 y 30 caracteres",
        },
      },
    },
    books_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "publisher",
  }
);

module.exports = Publisher;
