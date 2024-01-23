const path = require('path');
const db = require('../../database/models');

const mediosAPIController = {
    'list': async (req, res) => {
        try {
            const medios = await db.Medio.findAll()
            const result = {
                meta: {
                    count: medios.length,
                    status: 200,
                    url: '/api/medios'
                },
                data: medios
            }
            res.json(result)
        } catch (error) {
            console.log(error.message);
        }
    }
}
module.exports = mediosAPIController;