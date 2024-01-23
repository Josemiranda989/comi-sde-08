const path = require('path');
const db = require('../../database/models');

const genresAPIController = {
    'list': async (req, res) => {
        try {
            const genres = await db.Genero.findAll()
            const result = {
                meta: {
                    count: genres.length,
                    status: 200,
                    url: `/api/generos`
                },
                data: genres
            }
            res.json(result)


        } catch (error) {
            console.log(error.message);
        }
    }
}
module.exports = genresAPIController;