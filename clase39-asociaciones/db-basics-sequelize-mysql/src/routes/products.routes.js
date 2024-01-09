const express = require("express");
const {
  listado,
  detalle,
  buscarPorNombre,
  nuevoProducto,
  actualizarProducto,
  eliminarProducto,
  nuevaCategoria,
  buscarHistorial,
} = require("../controllers/products.controllers");
const router = express.Router();

//GET /productos
router.get("/", listado);
//GET /productos/detalle/:id
router.get("/detalle/:id", detalle);
//GET /productos/buscar?nombre=lap
router.get("/buscar", buscarPorNombre);
// POST /productos/crear
router.post('/crear', nuevoProducto);
// PUT /productos/actualizar
router.put('/actualizar/:id', actualizarProducto);
// DELETE /productos/eliminar/:id
router.delete('/eliminar/:id', eliminarProducto);
// POST /productos/nueva-categoria
router.post("/nueva-categoria", nuevaCategoria);
// GET /productos/historial/:id
router.get('/historial/:id', buscarHistorial)

module.exports = router;
