const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
        let name = `${Date.now()}-img-${file.originalname}`
        cb(null, name)
    }
})

const fileFilter = function (req, file, cb) {
    // Verifica si el archivo es una imagen
    console.log('tipo de archivo ', file.mimetype);
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('El archivo no es una imagen, vuelve atras e intenta de nuevo'), false);
    }
  };

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

module.exports = upload