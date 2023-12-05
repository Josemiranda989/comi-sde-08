const { body } = require('express-validator')

module.exports = [
    body('name')
    .notEmpty().withMessage('Debes ingresar un nombre').bail()
    .isAlphanumeric().withMessage('Debe ser un texto'),
    body('price')
    .notEmpty().withMessage('Ingresa un precio').bail()
    .isNumeric().withMessage('El precio debe ser un numero'),
    body('description')
    .notEmpty().withMessage('Ingresa una descripción'),
]