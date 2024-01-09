module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("usuarios", [
      {
        nombre: "Elon Musk",
        correo: "elon.musk@email.com",
        contrasena: "contraseña1",
      },
      {
        nombre: "Taylor Swift",
        correo: "taylor.swift@email.com",
        contrasena: "contraseña2",
      },
      {
        nombre: "Bill Gates",
        correo: "bill.gates@email.com",
        contrasena: "contraseña3",
      },
      {
        nombre: "Oprah Winfrey",
        correo: "oprah.winfrey@email.com",
        contrasena: "contraseña4",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("usuarios", null, {});
  },
};
