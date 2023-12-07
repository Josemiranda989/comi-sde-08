const express = require('express')
const router = express.Router()

const { register, processRegister, login, processLogin, profile, logout } = require('../controllers/users.controllers.js')
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware.js')


router.get('/register', register)
router.post('/register', processRegister)

router.get('/login', login)
router.post('/login', processLogin)


router.get('/profile', userLoggedMiddleware, profile)
router.get('/logout', userLoggedMiddleware, logout)
module.exports = router