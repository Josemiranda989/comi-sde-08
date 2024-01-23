const express = require('express');
const router = express.Router();
const generosAPIController = require('../../controllers/api/generosAPIController');

//Rutas
//Listado de todos los artistas
router.get('/', generosAPIController.list);
//Detalle del genero
//router.get('/:id', genresAPIController.detail);
//Películas por genero
//router.get('/:id/movies', genresAPIController.genreMovies);

module.exports = router;