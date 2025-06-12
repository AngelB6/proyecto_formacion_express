const express = require("express");
const cors = require("cors");

const genreRoutes = require("./routes/genreRoutes");
const authorsRoutes = require("./routes/authorsRoutes");
const booksRoutes = require("./routes/booksRoutes");
const publisherRoutes = require("./routes/publisherRoutes");

const PORT = 4000;
const app = express();

app.disable("x-powered-by");

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Home" });
});

app.use("/genre", genreRoutes);
app.use("/authors", authorsRoutes);
app.use("/books", booksRoutes);
app.use("/publisher", publisherRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto: http://localhost:${PORT}`);
});
