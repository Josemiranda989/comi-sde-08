const path = require('path');
const db = require('../../database/models');

const cancionesAPIController = {
    'list': async (req, res) => {
        try {
            const canciones = await db.Cancion.findAll({
                include: ['medio', 'genero']
            })
            const result = {
                meta: {
                    count: canciones.length,
                    status: 200,
                    url: '/api/canciones'
                },
                data: canciones
            }
            res.json(result)
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = cancionesAPIController;