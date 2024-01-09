module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("productos", [
      { nombre: "Laptop", precio: 1200.5, categoria_id: 1 },
      { nombre: "Camiseta", precio: 25.99, categoria_id: 2 },
      {
        nombre: 'Libro "El Principito"',
        precio: 15.99,
        categoria_id: 3,
      },
      { nombre: "Set de sábanas", precio: 45.5, categoria_id: 4 },
      { nombre: "Balón de fútbol", precio: 19.99, categoria_id: 5 },
      { nombre: "Muñeca Barbie", precio: 29.99, categoria_id: 6 },
      {
        nombre: "Cepillo eléctrico para dientes",
        precio: 34.99,
        categoria_id: 7,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("productos", null, {});
  },
};
