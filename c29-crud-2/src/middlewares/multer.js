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

const upload = multer({
    storage: storage,
   /*  fileFilter: (req, file, cb) => {
        console.log("El tipo de archivo es " + file.mimetype);
        let mimetypes = ["image/png", "image/jpg", "image/jpeg", "image/gif"]
        if (mimetypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Formato de archivo invalido'));
        }
    } */
})

module.exports = upload