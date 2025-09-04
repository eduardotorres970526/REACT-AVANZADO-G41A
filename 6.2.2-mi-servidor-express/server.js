// index.js
const express = require('express');
const app = express();
const port = 3000;

// Endpoint básico
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
