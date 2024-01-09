// en el directorio de seeders, por ejemplo, "seeders/05_carrito_compras.js"

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('carrito_compras', [
        { usuario_id: 1, producto_id: 1, cantidad: 1 },
        { usuario_id: 1, producto_id: 3, cantidad: 2 },
        { usuario_id: 2, producto_id: 2, cantidad: 1 },
      ]);
  
      // Actualizar el autoincremento después de la inserción manual
      await queryInterface.sequelize.query("ALTER TABLE carrito_compras AUTO_INCREMENT = 4;");
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('carrito_compras', null, {});
    },
  };
  