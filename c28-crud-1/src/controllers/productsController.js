const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('products.ejs', { products })
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const pSelected = products.find(product => product.id == req.params.id)
		res.render('detail.ejs', { pSelected })
	},

	// Create - Form to create
	create: (req, res) => {
		res.render("product-create-form.ejs")
	},

	// Create -  Method to store
	store: (req, res) => {
		// creamos nuevo producto del formulario con req.body
		const newProduct = {
			// id: products.length + 1,
			id: uuidv4(), //id unico uuid
			image: 'default-image.png', //imagen por defecto
			...req.body // spread operator
		}
		// Agrego nuevo producto al listado
		products.push(newProduct)
		// Convertir a JSON y escribir el archivo js
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
		// redireccionamos al listado de productos
		res.redirect('/products')
	},

	// Update - Form to edit
	edit: (req, res) => {
		const pToEdit = products.find(product => product.id == req.params.id)
		res.render('product-edit-form.ejs', { pToEdit })
	},
	// Update - Method to update
	update: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const pToEdit = products.find(product => product.id == req.params.id)
		pToEdit.name = req.body.name || pToEdit.name
		pToEdit.price = req.body.price || pToEdit.price
		pToEdit.discount = req.body.discount || pToEdit.discount
		pToEdit.category = req.body.category || pToEdit.category
		pToEdit.description = req.body.description || pToEdit.description
		pToEdit.image = req.body.image || pToEdit.image
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
		res.redirect('/products')
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		const id = req.params.id
		let newProducts = products.filter(product => product.id != id)
		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '))
		res.redirect('/products/')
	}
};

module.exports = controller;