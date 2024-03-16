const db = require("../database/models");

const controller = {
  index: async (req, res) => {
    res.send(`<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>API de Juegos</title>
	</head>
	<body style="font-family: Arial, sans-serif; padding: 20px;">
	
	<h1 style="color: #333; text-decoration: underline;">Bienvenido a la API de Juegos</h1>
	<p style="color: #666; margin-bottom: 20px;">Esta es una API para gestionar juegos.</p>
	<h2 style="color: #333;">Endpoints Disponibles:</h2>
	<ul style="list-style-type: none; padding: 0;">
	  <li><a href="/games" style="color: #007bff; text-decoration: none;">GET /games</a> - Obtener todos los juegos</li>
	  <li><a href="/games/:id" style="color: #007bff; text-decoration: none;">GET /games/:id</a> - Obtener un juego por su ID</li>
	  <li><a href="/games" style="color: #007bff; text-decoration: none;">POST /games</a> - Crear un nuevo juego</li>
	  <li><a href="/games/:id" style="color: #007bff; text-decoration: none;">PUT /games/:id</a> - Actualizar un juego existente por su ID</li>
	  <li><a href="/games/:id" style="color: #007bff; text-decoration: none;">DELETE /games/:id</a> - Eliminar un juego por su ID</li>
	</ul>
	
	</body>
	</html>`);
  },
};

module.exports = controller;
