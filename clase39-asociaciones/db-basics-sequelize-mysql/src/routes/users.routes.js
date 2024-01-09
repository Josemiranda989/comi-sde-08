const express = require("express");
const {
  listado,
  perfil,
  nuevoUsuario,
  nuevoHistorial,
  historialUsuario,
} = require("../controllers/users.controllers");
const router = express.Router();

//GET /usuarios
router.get("/", listado);
//GET /usuarios/1
router.get("/perfil/:id", perfil);
//POST /usuarios/crear
router.post("/crear", nuevoUsuario);
//POST /usuarios/nueva-compra
router.post('/nueva-compra', nuevoHistorial)
//GET /usuarios/historial
router.get('/historial/:id', historialUsuario)
//GET /usuarios/carrito/:id
router.get('/carrito/:id', historialUsuario)

module.exports = router;
