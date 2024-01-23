const fs = require('fs');
const path = require('path');
const axios = require('axios')

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
	},
	countries: (req, res) => {
		fetch('https://restcountries.com/v3.1/all')
			.then(data => data.json())
			.then(countries => {
				res.render('countries.ejs', { countries });
			})
	},
	sdeUsd: async (req, res) => {
		try {
			const sde = await axios.get('https://apis.datos.gob.ar/georef/api/provincias?nombre=Tucuman')
			const usd = await axios.get('https://api.bluelytics.com.ar/v2/latest')

			res.json({
				sde: sde.data,
				usd: usd.data
			});
		} catch (error) {
			console.log(error.message);
		}

	}
};

module.exports = controller;
