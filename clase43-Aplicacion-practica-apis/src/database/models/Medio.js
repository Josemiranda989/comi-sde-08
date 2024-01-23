// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Medio';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        nombre: {
            type: dataTypes.STRING(27),
            allowNull: false
        }
    };
    let config = {
        tableName: 'tipos_de_medio',
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    const Medio = sequelize.define(alias, cols, config);

    Medio.associate = function (models) {
        Medio.hasMany(models.Cancion, { // models.Movies -> Movie es el valor de alias en movie.js
            as: "medios", // El nombre del modelo pero en plural
            foreignKey: "id_tipo_de_medio"
        })
    }

    return Medio;
};