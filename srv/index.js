const express = require("express");
const PORT = 4000;
const app = express();
const genreRoutes = require("./routes/genreRoutes");
const authorsRoutes = require("./routes/authorsRoutes");
const booksRoutes = require("./routes/booksRoutes");
const publisherRoutes = require("./routes/publisherRoutes");

express.json();

app.disable("x-powered-by");

app.use("/genre", genreRoutes);
app.use("/authors", authorsRoutes);
app.use("/books", booksRoutes);
app.use("/publisher", publisherRoutes);

app.use("/", (req, res) => {
  res.json({ message: "Home" });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto: http://localhost:${PORT}`);
});
