const express = require('express');

// const { index } = require('../controllers');
const controllerIndex = require('../controllers/index');

const upload = require('../middlewares/multer')

const router = express.Router();



router.get('/', controllerIndex.index)
// router.get('/', index)
router.get('/detail/:id', controllerIndex.detail)

// Vista del form de creacion del plato
router.get('/crear-plato', controllerIndex.getCreateForm)
// Proceso de creacion del plato
router.post('/crear-plato', upload.single('img'), controllerIndex.postCreate)

// Vista del form de edicion del plato
router.get('/editar-plato/:id', controllerIndex.getEditForm)
// Proceso de actualizacion del plato
router.put('/editar-plato/:id', upload.single('img'), controllerIndex.putCreate)

module.exports = router;