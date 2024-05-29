const express = require('express');
const app = express();
const port = 3000;

// Lista de integrantes
const integrantes = [
  { id: 1, nombre: "Silvia", apellido: "Chaluisa" },
  { id: 2, nombre: "Daniel", apellido: "Cola" },
  { id: 3, nombre: "Francisco", apellido: "Caero" },
  { id: 4, nombre: "Saúl", apellido: "Bautista" }
];

// Ruta para presentar la información del grupo de trabajo
app.get('/', (req, res) => {
  res.send("WELCOME - Grupo N° 2");
});

// Ruta para presentar la información de los integrantes del grupo
app.get('/integrantes', (req, res) => {
  res.json(integrantes);
});

// Ruta para presentar la información de un integrante específico del grupo
app.get('/integrantes/:id', (req, res) => {
  const integrante = integrantes.find(i => i.id === parseInt(req.params.id));
  if (integrante) {
    res.json(integrante);
  } else {
    res.status(404).send('Integrante no encontrado');
  }
});

// Ruta para presentar un HTML con algunos productos quemados
app.get('/products', (req, res) => {
  const html = `
    <html>
      <body>
        <h1>Productos</h1>
        <ul>
          <li>Lacteos</li>
          <li>Embutidos</li>
          <li>Frutas</li>
        </ul>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
