module.exports = (sequelize, dataTypes) => {
  let alias = "Productos";
  let cols = {
    nombre: {
      type: dataTypes.STRING,
    },
    precio: {
      type: dataTypes.INTEGER,
    },
    imagen: {
      type: dataTypes.STRING,
    },
    categoria_id: { //podemos excluirlo para llamarlo en la asociacion
      type: dataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "productos",
    timestamps: false,
  };
  const Producto = sequelize.define(alias, cols, config);

  Producto.associate = (models) => {
    // Relación con la tabla Categorias
    Producto.belongsTo(models.Categorias, {
      as: 'categoria',
      foreignKey: 'categoria_id',
    });

    // Relación con la tabla HistorialCompras
    Producto.hasMany(models.HistorialCompras, {
      as: 'historialCompras',
      foreignKey: 'producto_id',
    });

    // Relación muchos a muchos con la tabla CarritoCompras
    Producto.belongsToMany(models.Usuarios, {
      through: 'carrito_compras',
      as: 'usuariosEnCarrito',
      foreignKey: 'producto_id',
    });
  };

  return Producto;
};
