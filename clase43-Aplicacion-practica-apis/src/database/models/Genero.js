// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Genero';
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
            type: dataTypes.STRING(18),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function (models) {
        Genero.hasMany(models.Cancion, { // models.Movies -> Movie es el valor de alias en movie.js
            as: "generos", // El nombre del modelo pero en plural
            foreignKey: "id_genero"
        })
    }

    return Genero;
};