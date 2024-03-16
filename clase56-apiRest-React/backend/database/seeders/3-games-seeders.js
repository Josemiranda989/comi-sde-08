// gamesSeeder.js
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "games",
      [
        {
          title: "Javascript Game",
          genre: "Lenguaje de programacion",
          awards: 3,
          img_url: "img-banner-01.png",
          releaseDate: new Date("2023-01-01"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "React Game",
          genre: "Frontend Framework?",
          awards: 5,
          img_url: "img-banner-02.jpg",
          releaseDate: new Date("2022-06-15"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Node Game",
          genre: "Entorno de ejecucion",
          awards: 5,
          img_url: "img-banner-03.png",
          releaseDate: new Date("2022-06-15"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Agrega más juegos según sea necesario
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("games", null, {});
  },
};
