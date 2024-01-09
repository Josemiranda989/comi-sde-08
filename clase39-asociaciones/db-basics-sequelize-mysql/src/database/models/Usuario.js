module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";
    let cols = {
      nombre: {
        type: dataTypes.STRING,
      },
      correo: {
        type: dataTypes.STRING,
      },
      contrasena: {
        type: dataTypes.STRING,
      },
      avatar_url: {
        type: dataTypes.STRING,
      },
    };
    let config = {
      tableName: "usuarios",
      timestamps: false,
    };
    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = (models) => {
      // Relación con la tabla HistorialCompras
      Usuario.hasMany(models.HistorialCompras, {
        as: 'historialCompras',
        foreignKey: 'usuario_id',
      });

      // Nueva relación muchos a muchos con la tabla CarritoCompras
      Usuario.belongsToMany(models.Productos, {
        through: 'carrito_compras',
        as: 'carritoCompras',
        foreignKey: 'usuario_id',
      });
    };

    return Usuario;
  };
  