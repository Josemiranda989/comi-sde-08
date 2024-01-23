module.exports = (sequelize, dataTypes) => {
    let alias = 'Album';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        titulo: {
            type: dataTypes.STRING(95),
            allowNull: false
        },
        id_artista: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false,
        tableName: 'albumes'
    }
    const Album = sequelize.define(alias, cols, config);

    Album.associate = function (models) {
        Album.belongsTo(models.Artista, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "artista",
            foreignKey: "id_artista"
        })
    }

    return Album
};