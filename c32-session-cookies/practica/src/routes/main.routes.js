const express = require('express')
const router = express.Router()

const {home, visits} = require('../controllers/main.controllers')

router.get('/', home)
router.get('/count', visits)

module.exports = router