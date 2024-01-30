const listaPlatos = require("../data/platos")

const controller = {
    detail: (req, res) => {
        const id = req.params.id;
        const getProduct = listaPlatos.find(product => product.id == id);
        if (getProduct) {
            return res.render('detalleMenu', { getProduct });
        }
        res.send('El producto no existe');
    }
};


module.exports = controller