const path = require('path');
const db = require('../../database/models');

const artistasAPIController = {
    'list': async (req, res) => {
        try {
            const artist = await db.Artista.findAll()
            const result = {
                meta: {
                    count: artist.length,
                    status: 200,
                    url: '/api/artist'
                },
                data: artist
            }
            res.json(result)
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        try {
            await db.Artista.create({
                nombre: req.body.nombre
            })
            res.redirect('/api/artistas')
        } catch (error) {
            console.log(error.message);
        }
    },
    update: async (req, res) => {
        try {
            await db.Artista.update({
                nombre: req.body.nombre
            }, {
                where: {
                    id: req.params.id
                }
            })
            res.redirect('/api/artistas')
        } catch (error) {
            console.log(error.message);
        }
    },
    destroy: async (req, res) => {
        try {
            await db.Artista.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.redirect('/api/artistas')
        } catch (error) {
            console.log(error.message);
        }
    }
}
module.exports = artistasAPIController;