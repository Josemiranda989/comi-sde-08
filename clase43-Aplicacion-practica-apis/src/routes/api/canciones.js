const express = require('express');
const router = express.Router();
const cancionesAPIController = require('../../controllers/api/cancionesAPIController');

//Rutas
//Listado de albumes
router.get('/', cancionesAPIController.list);
//Detalle de un ambum en base a un artista indicado
//router.get('/:id', albumesAPIController.detail);
//Filtrar películas por rating. Puede colocar desde 1 hasta 10
//router.get('/recomended/:rating', moviesAPIController.recomended);
//Agregar una película
//router.post('/create', moviesAPIController.create);
//Modificar una película
//router.put('/update/:id', moviesAPIController.update);
//Eliminar una película
//router.delete('/delete/:id', moviesAPIController.destroy);

module.exports = router;