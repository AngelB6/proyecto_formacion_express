// Importamos express para la creación de la API y cors para la comunicación de origen cruzado
const express = require("express");
const cors = require("cors");

// Importamos la conexión a la BD, sequelize para la inicialización de la misma y el puerto en el que se levantara el servidor
const { sequelize, connectDB } = require("./database/db");
const { PORT } = require("./config/config");

// Importamos las rutas principales de nuestra API
const genreRoutes = require("./routes/genreRoutes");
const authorsRoutes = require("./routes/authorsRoutes");
const booksRoutes = require("./routes/booksRoutes");
const publisherRoutes = require("./routes/publisherRoutes");

// Creamos la aplicación de express y asignamos el puerto
const app = express();
const port = PORT || 4000;

// Desactivamos el encabezado de la tecnología usada para el desarrollo por temas de seguridad
app.disable("x-powered-by");

// Parseamos las solicitudes a JSON y habilitamos el cors
app.use(express.json());
app.use(cors());

// Definimos la ruta principal de nuestra aplicación
app.get("/", (req, res) => {
  res.json({ message: "Home" });
});

// Usamos las rutas principales y las pasamos Routing que manejara las subrutas
app.use("/genre", genreRoutes);
app.use("/authors", authorsRoutes);
app.use("/books", booksRoutes);
app.use("/publisher", publisherRoutes);

// Manejo global de error 404 - Not Found
app.use((req, res, next) => {
  res.status(404).send("404 - Ruta no encontrada");
  next(error);
});

// Manejo global de errores del servidor
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// Función de inicio del servidor la cual se conectara con la BD, sincronizara los modelos y tablas y mantendrá la escucha activa
async function startServer() {
  await connectDB();

  await sequelize.sync({ alter: true });
  console.log("Base de datos sincronizada");

  app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto: http://localhost:${PORT}`);
  });
}

// Ejecutamos el servidor
startServer();
