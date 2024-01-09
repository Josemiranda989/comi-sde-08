module.exports = (sequelize, dataTypes) => {
    let alias = "HistorialCompras";
    let cols = {
      usuario_id: {
        type: dataTypes.INTEGER,
      },
      producto_id: {
        type: dataTypes.INTEGER,
      },
      cantidad: {
        type: dataTypes.INTEGER,
      },
      fecha_compra: {
        type: dataTypes.DATE,
      },
    };
    let config = {
      tableName: "historial_compras",
      timestamps: false,
    };
    const HistorialCompras = sequelize.define(alias, cols, config);
  
    HistorialCompras.associate = function(models) {
      HistorialCompras.belongsTo(models.Usuarios, { foreignKey: 'usuario_id' });
      HistorialCompras.belongsTo(models.Productos, { foreignKey: 'producto_id' });
    };
  
    return HistorialCompras;
  };
  