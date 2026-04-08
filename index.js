const axios = require("axios");

app.get("/chat", async (req, res) => {
  const mensaje = req.query.mensaje || "";

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content: "Eres J.A.R.V.I.S, asistente de inteligencia artificial experto en ingeniería, física y matemáticas. Hablas español perfecto, claro y profesional. Siempre llamas al usuario señor Ramos. Explicas paso a paso cuando sea necesario. Evita errores de redacción, el usuario es curioso por lo que tienes que conocer de todo."
          },
          {
            role: "user",
            content: mensaje
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const respuesta = response.data.choices[0].message.content;

    res.send(respuesta);

  } catch (error) {
    console.log(error.response?.data || error.message);
    res.send("JARVIS activo pero sin conexión a IA, señor Ramos.");
  }
});