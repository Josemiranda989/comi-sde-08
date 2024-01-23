const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		const inDiscount = products.filter(product => product.discount > 0)
		const visited = products.filter(product => product.category === "visited")

		let result = {
			status: 200,
			inDiscount: inDiscount,
			visited: visited
		}

		res.status(200).json(result)
	},
	search: (req, res) => {
		let palabra = (req.query.keywords).toLowerCase()
		let searchProducts = products.filter(product => (product.name).toLowerCase().includes(palabra))

		res.json({ searchProducts: searchProducts, palabra })
	}
};

module.exports = controller;
