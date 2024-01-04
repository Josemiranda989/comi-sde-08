module.exports = (sequelize, DataTypes) => {
    const alias = 'Artists'
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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