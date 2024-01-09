module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categorias", [
      { nombre: "Electrónicos" },
      { nombre: "Ropa" },
      { nombre: "Libros" },
      { nombre: "Hogar y Jardín" },
      { nombre: "Deportes y aire libre" },
      { nombre: "Juguetes y juegos" },
      { nombre: "Salud y belleza" },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categorias", null, {});
  },
};
