const db = require('../database/models')

const controller = {
	index: async (req, res) => {
		// const users = await db.User.findAll({
		// 	attributes: { exclude: ['password', 'countryId', 'CountryId', 'createdAt', 'updatedAt', 'deletedAt'] },
		// 	include: [
		// 		{
		// 			model: db.Country,
		// 			as: 'country',
		// 			attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
		// 		}
		// 	]
		// })
		// const countries = await db.Country.findAll()
		// console.log(users);
		// console.log(countries);
		return res.render('index');
	}
}

module.exports = controller;