// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS http://localhost:3000/products ***/ 
router.get('/', productsController.index); 

/*** GET ONE PRODUCT http://localhost:3000/products/detail/1 ***/ 
router.get('/detail/:id', productsController.detail); 

/*** CREATE ONE PRODUCT http://localhost:3000/products/create ***/ 
router.get('/create', productsController.create); 
router.post('/create', productsController.store); 


/*** EDIT ONE PRODUCT http://localhost:3000/products/edit/1 ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
