const db = require('../database/models')
const Op = db.Sequelize.Op

module.exports = {
    index: (req, res) => {
        const palabra = 'Maluma'
        db.Artists.findAll(/* {
            where: {
                nombre: { [Op.like]: `%${palabra}%` }
            }
        } */)
            .then(function (artists) {
                res.json(artists);
            })
            .catch(error => console.log(error))
    },
    clientsList: (req, res) => {
        db.Clients.findAll({
            // limit: 10,
            // offset: 2
        })
            .then(function (clients) {
                res.json(clients);
            })
            .catch(error => console.log(error))
    },
    // newArtist: (req, res) => {
    //     db.Artists.create({ nombre: "Maluma" })
    //         .then((result) => {
    //             res.json(result)
    //         })
    //         .catch(error => console.log(error))
    // }
    newArtist: async (req, res) => {
        try {
            const result = await db.Artists.create({ id: Date.now(), nombre: "Bad bunny" })
            res.json(result)
        } catch (error) {
            console.log(error);
        }
    },
    updateArtist: async (req, res) => {
        try {
            await db.Artists.update({
                nombre: req.body.nombre
            }, { where: { id: req.params.id } })
            const updateArtist = await db.Artists.findByPk(req.params.id)

            res.json(updateArtist)

        } catch (error) {
            console.log(error);
        }
    },
    deleteArtist: async (req, res) => {
        try {
            const value = await db.Artists.destroy({
                where: { id: req.params.id }
            })
            res.json({
                result: 'Se elimino correctamente',
                value: value
            })
        } catch (error) {
            console.log(error);
        }
    }
}