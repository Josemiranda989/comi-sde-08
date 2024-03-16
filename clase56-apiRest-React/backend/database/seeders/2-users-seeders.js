"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "Juan Pérez",
          email: "juan@example.com",
          password: "contraseña",
          avatar: "1609285636788_img.jpg",
          countryId: 1, // ID del país según el seed insertado
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "John Doe",
          email: "john@example.com",
          password: "password",
          avatar: "1609285636788_img.jpg",
          countryId: 2, // ID del país según el seed insertado
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Agrega más usuarios según sea necesario
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
