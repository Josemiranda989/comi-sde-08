const express = require('express')
const router = express.Router()
const productsController = require('../controllers/products.controllers')

router.get('/detail/:id', productsController.detail)
router.get('/create', productsController.create)

module.exports = router