module.exports = (sequelize, dataTypes) => {
    let alias = 'Cancion';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        nombre: {
            type: dataTypes.STRING(128),
            allowNull: false
        },
        id_album: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_tipo_de_medio: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_genero: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        compositor: {
            type: dataTypes.STRING(188),
            allowNull: false
        },
        milisegundos: {
            type: dataTypes.INTEGER(1),
            allowNull: false
        },
        bytes: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        precio_unitario: {
            type: dataTypes.DECIMAL(3.2),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false,
        tableName: 'canciones'
    }
    const Cancion = sequelize.define(alias, cols, config);

    Cancion.associate = function (models) {
        Cancion.belongsTo(models.Album, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "albun",
            foreignKey: "id_album"
        })
        Cancion.belongsTo(models.Medio, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "medio",
            foreignKey: "id_tipo_de_medio"
        })
        Cancion.belongsTo(models.Genero, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "genero",
            foreignKey: "id_genero"
        })
    }

    return Cancion;
};