// Importamos sequelize y sus tipos que se utilizaran para la creación de modelos
const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");

// Creamos el modelo/tabla Genre con sus campos {id, genre}, sus restricciones y sus validaciones
const Genre = sequelize.define(
  "Genre",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "El genero no puede estar vacío",
        },
        len: {
          args: [3, 100],
          msg: "El nombre del genero debe tener entre 3 y 100 caracteres",
        },
      },
    },
  },
  {
    tableName: "genre",
  }
);

// Exportamos el modelo que sera utilizado en el controller
module.exports = Genre;
