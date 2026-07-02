const express = require('express');
const app = express();

app.use(express.json());

app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });

});

app.get('/registro', (req, res) => {
  res.send('Ruta /registro disponible. Envia una petición POST con JSON a esta URL.');
});

app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });

});

app.get('/', (req, res) => {
  res.send('Servidor Express activo en puerto 3000');
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});