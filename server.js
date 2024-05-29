const express = require('express');
const app = express();
const port = 3000;

//Servir archivos estáticos desde el directorio "public"
app.use(express.static('public'));

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



  
// Lista de productos con sus nombres e imágenes
const productos = [
  { nombre: "Lácteos", imagen: "/imagenes/img2.jpg" },
  { nombre: "Embutidos", imagen: "/imagenes/img3.jpg" },
  { nombre: "Frutas", imagen: "/imagenes/img4.jpg" }
];

// Generar opciones del menú desplegable
const options = productos.map(producto => `<option value="${producto.nombre}">${producto.nombre}</option>`).join('');

// Ruta para presentar un HTML con el menú desplegable
app.get('/products', (req, res) => {
  const dropdown = `
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/style.css">
      </head>
      <body>
        <h1>Selecciona un producto:</h1>
        <form action="/producto" method="GET">
          <select name="producto">
            ${options}
          </select>
          <button type="submit">Ver Producto</button>
        </form>
      </body>
    </html>
  `;
  res.send(dropdown);
});

// Ruta para mostrar el producto seleccionado
app.get('/producto', (req, res) => {
  const selectedProduct = req.query.producto;
  const producto = productos.find(p => p.nombre === selectedProduct);
  
  if (producto) {
    const html = `
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="/style.css">
        </head>
        <body>
          <div class="container">
            <h1>${producto.nombre}</h1>
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <form action="/products" method="GET">
              <button type="submit">Volver al menú</button>
            </form>
          </div>
        </body>
      </html>
    `;
    res.send(html);
  } else {
    res.send("Producto no encontrado");
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
