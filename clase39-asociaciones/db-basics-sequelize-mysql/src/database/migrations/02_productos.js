module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('productos', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: true
        },
        nombre: {
          type: Sequelize.STRING(50),
        },
        precio: {
          type: Sequelize.DECIMAL(10, 2),
        },
        imagen: {
          type: Sequelize.STRING(150),
          defaultValue: 'default_img.png',
        },
        categoria_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'categorias',
            key: 'id'
          },
        },
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('productos');
    }
  };
  