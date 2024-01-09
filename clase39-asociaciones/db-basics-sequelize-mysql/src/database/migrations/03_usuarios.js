module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('usuarios', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: true
        },
        nombre: {
          type: Sequelize.STRING(50),
        },
        correo: {
          type: Sequelize.STRING(50),
        },
        contrasena: {
          type: Sequelize.STRING(150),
        },
        avatar_url: {
          type: Sequelize.STRING(150),
          defaultValue: 'default_avatar.png',
        },
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('usuarios');
    }
  };
  