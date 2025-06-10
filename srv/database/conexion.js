const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "biblioteca",
});

db.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Conexión a la BD correcta");
});

module.exports = db;
