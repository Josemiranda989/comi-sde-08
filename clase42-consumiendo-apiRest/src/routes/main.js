// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/search', mainController.search);
router.get('/countries', mainController.countries);
router.get('/lo-que-sea', mainController.sdeUsd)

module.exports = router;
