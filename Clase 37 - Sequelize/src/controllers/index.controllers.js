const db = require('../database/models')
const Op = db.Sequelize.Op

module.exports = {
    index: (req, res) => {
        const palabra = 'Mah'
        db.Artists.findAll({
            where: {
                nombre: { [Op.like]: `%${palabra}%` }
            }
        })
            .then(function (artists) {
                res.json(artists);
            })
            .catch(error => console.log(error))
    },
    clientList: (req, res) => {
        db.Clients.findAll({
            limit: 2,
            offset: 2
        })
            .then(function (clients) {
                res.json(clients)
            })
            .catch(error => console.log(error))
    }
}