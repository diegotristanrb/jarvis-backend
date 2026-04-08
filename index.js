const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get("/", (req, res) => {
  res.send("JARVIS ONLINE IA");
});

// Ruta chat (prueba simple)
app.get("/chat", (req, res) => {
  const mensaje = req.query.mensaje || "";
  res.send("TEST OK: " + mensaje);
});

// Servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor activo en puerto " + PORT);
});