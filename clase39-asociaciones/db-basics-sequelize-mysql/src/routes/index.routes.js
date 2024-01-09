const express = require('express');
const {indice} = require('../controllers/index.controllers');
const router = express.Router();

router.get('/', indice);

module.exports = router;