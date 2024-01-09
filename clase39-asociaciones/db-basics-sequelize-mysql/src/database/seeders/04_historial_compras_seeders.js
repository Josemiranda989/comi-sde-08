module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('historial_compras', [
      { usuario_id: 1, producto_id: 1, cantidad: 2, fecha_compra: new Date() },
      { usuario_id: 3, producto_id: 2, cantidad: 1, fecha_compra: new Date() },
      { usuario_id: 1, producto_id: 3, cantidad: 3, fecha_compra: new Date() },
      { usuario_id: 4, producto_id: 4, cantidad: 1, fecha_compra: new Date() },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('historial_compras', null, {});
  }
};
