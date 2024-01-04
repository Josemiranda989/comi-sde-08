const express = require('express')
const router = express.Router()

const indexController = require('../controllers/index.controllers')

router.get('/', indexController.index)
router.get('/list', indexController.clientsList)
router.post('/new-artist', indexController.newArtist)
router.put('/update-artist/:id', indexController.updateArtist)
router.delete('/delete-artist/:id', indexController.deleteArtist)

module.exports = router