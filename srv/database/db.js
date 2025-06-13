// Importamos el config con los datos para la conexión a la BD con Sequelize
const dbConfig = require("../config/dbConfig");

// Importamos Sequelize para la conexión con la BD
const { Sequelize } = require("sequelize");

// Creamos una instancia nueva de Sequelize, configuramos el nombre de la BD, usuario, password, host y el tipo de dialogo
const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: dbConfig.PORT,
    logging: false, //Deshabilita los logs de SQL en la consola
    define: {
      freezeTableName: true, //Evita que Sequelize pluralice los nombres de las tablas
      timestamps: false,
    },
  }
);

// Realizamos la conexión a la BD
async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Conexión con la BD establecida correctamente");
  } catch (error) {
    console.error("No se pudo establecer conexión con la BD", error);
    process.exit(1);
  }
}

// Importamos sequelize y la conexión a la BD para la creación de modelos
module.exports = { sequelize, connectDB };
