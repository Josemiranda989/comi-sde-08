module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('carrito_compras', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        usuario_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'usuarios',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        producto_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'productos',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        cantidad: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('carrito_compras');
    },
  };