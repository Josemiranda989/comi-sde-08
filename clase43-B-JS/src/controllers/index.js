// const listaPlatos = require("../data/platos.js");
// const about = require('../data/about');

const fs = require('fs');
const path = require('path')

const pathPlatos = path.join(__dirname, '../data/platos.json')
const listaPlatos = JSON.parse(fs.readFileSync(pathPlatos, 'utf-8'))

const pathAbout = path.join(__dirname, '../data/about.json')
const about = JSON.parse(fs.readFileSync(pathAbout, 'utf-8'))

const controller = {

    index: (req, res) => {
        res.render('index', { listaPlatos, about })
    },

    detail: (req, res) => {
        const id = req.params.id;
        const getProduct = listaPlatos.find(product => product.id == id);
        if (getProduct) {
            return res.render('detalleMenu.ejs', { getProduct });
        }
        return res.send('El producto no existe');
    },

    getCreateForm: (req, res) => {
        res.render('crear-plato.ejs')
    },

    postCreate: (req, res) => {
        const platoNuevo = {
            id: Date.now(),
            ...req.body,
            img: req.file.filename || 'default.png'
        }
        listaPlatos.push(platoNuevo)
        // convertir a json
        let listaPlatosJSON = JSON.stringify(listaPlatos, null, ' ')
        // escribir el json
        fs.writeFileSync(pathPlatos, listaPlatosJSON)
        // redireccionamos a home
        res.redirect('/')
    },

    getEditForm: (req, res) => {
        const id = req.params.id
        const plato = listaPlatos.find(plato => plato.id == id)
        if(plato){
            res.render('actualizar-plato', { plato: plato })
        }
        res.send('El plato que quieres editar no existe')
    },

    putCreate: (req, res) => {
        const { id } = req.params
        const { titulo, descripcionCorta, descripcionDetallada, precio} = req.body

        const platoAEditar = listaPlatos.find(plato => plato.id == id)

        platoAEditar.titulo = titulo || platoAEditar.titulo
        platoAEditar.descripcionCorta = descripcionCorta || platoAEditar.descripcionCorta
        platoAEditar.descripcionDetallada = descripcionDetallada || platoAEditar.descripcionDetallada
        platoAEditar.precio = precio || platoAEditar.precio
        platoAEditar.img = req.file.filename || platoAEditar.img

        fs.writeFileSync(pathPlatos, JSON.stringify(listaPlatos, null, ' '))

        res.redirect('/')
    }
}

module.exports = controller