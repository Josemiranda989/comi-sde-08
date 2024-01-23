const path = require('path');
const db = require('../../database/models');

const albumesAPIController = {
    'list': async (req, res) => {
        try {
            const albums = await db.Album.findAll({
                include: ['artista']
            })
            const result = {
                meta: {
                    count: albums.length,
                    status: 200,
                    url: '/api/albumes'
                },
                data: albums
            }
            res.json(result)
        } catch (error) {
            console.log(error.message);
        }
    },

    'detail': async (req, res) => {
        try {
            const id = req.params.id || req.query.id
            const album = await db.Album.findByPk(id)
            const result = {
                meta: {
                    status: 200,
                    url: `/api/albums/${album.id}`
                },
                data: album
            }
            res.json(result)
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = albumesAPIController;