module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('historial_compras', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: true
        },
        usuario_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'usuarios',
            key: 'id'
          },
        },
        producto_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'productos',
            key: 'id'
          },
        },
        cantidad: {
          type: Sequelize.INTEGER,
        },
        fecha_compra: {
          type: Sequelize.DATE,
        },
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('historial_compras');
    }
  };
  