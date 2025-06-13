const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");

const Authors = sequelize.define(
  "Authors",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El nombre del autor no puede estar vacío",
        },
        len: {
          args: [3, 50],
          msg: "El nombre del autor debe tener entre 3 y 50 caracteres",
        },
      },
    },
    surname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El apellido del autor no puede estar vacío",
        },
        len: {
          args: [3, 50],
          msg: "El apellido del autor debe tener entre 3 y 50 caracteres",
        },
      },
    },
  },
  {
    tableName: "authors",
  }
);

module.exports = Authors;
