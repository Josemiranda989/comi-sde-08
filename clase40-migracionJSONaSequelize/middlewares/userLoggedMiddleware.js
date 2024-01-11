// const User = require('../tools/User');
const db = require('../database/models')

async function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;
	// let userFromCookie = User.findByField('email', emailInCookie);
	let userFromCookie = await db.User.findOne({
		where: { email: emailInCookie }
	})

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware;