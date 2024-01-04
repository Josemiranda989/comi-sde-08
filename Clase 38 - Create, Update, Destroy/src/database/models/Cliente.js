module.exports = (sequelize, DataTypes) => {
    const alias = 'Clients'
    const cols = {
        apellido: {
            type: DataTypes.STRING
        },
        ciudad: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    }
    const config = {
        tableName: 'clientes',
        timestamps: false
    }
    const Cliente = sequelize.define(alias, cols, config)

    return Cliente
}