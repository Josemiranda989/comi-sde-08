module.exports = (sequelize, DataTypes) => {
    const alias = 'Artists'
    const cols = {
        nombre: {
            type: DataTypes.STRING
        }
    }
    const config = {
        tableName: 'artistas',
        timestamps: false
    }
    const Artista = sequelize.define(alias, cols, config)

    return Artista
}