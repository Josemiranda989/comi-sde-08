const express = require('express');
const router = express.Router();
const albumesAPIController = require('../../controllers/api/albumesAPIController');

//Rutas
//Listado de albumes

router.get('/', albumesAPIController.list);
//Detalle de un ambum en base a un artista indicado
router.get('/detail/:id?', albumesAPIController.detail);

module.exports = router;