const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta base
app.get("/", (req, res) => {
  res.send("JARVIS ONLINE");
});

// Ruta chat (PRUEBA)
app.get("/chat", (req, res) => {
  const mensaje = req.query.mensaje || "";

  res.send("JARVIS responde: " + mensaje + ", señor Ramos");
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});