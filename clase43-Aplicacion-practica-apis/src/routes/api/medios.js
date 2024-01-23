const express = require('express');
const router = express.Router();
const mediosAPIController = require('../../controllers/api/mediosAPIController');

//Rutas
//Listado de todos los artistas
router.get('/', mediosAPIController.list);
//Detalle del genero
//router.get('/:id', genresAPIController.detail);
//Películas por genero
//router.get('/:id/movies', genresAPIController.genreMovies);

module.exports = router;