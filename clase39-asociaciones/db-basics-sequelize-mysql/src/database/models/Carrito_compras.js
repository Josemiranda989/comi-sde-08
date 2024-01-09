module.exports = (sequelize, DataTypes) => {
    const CarritoCompras = sequelize.define(
      'CarritoCompras',
      {
        usuario_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        producto_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        cantidad: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        tableName: 'carrito_compras',
        timestamps: false,
      }
    );
  
    CarritoCompras.associate = (models) => {
      // Asociación con la tabla Usuarios
      CarritoCompras.belongsTo(models.Usuarios, {
        foreignKey: 'usuario_id',
        as: 'usuario',
      });
  
      // Asociación con la tabla Productos
      CarritoCompras.belongsTo(models.Productos, {
        foreignKey: 'producto_id',
        as: 'producto',
      });
    };
  
    return CarritoCompras;
  };