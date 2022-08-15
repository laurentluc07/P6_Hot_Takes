const multer = require('multer');
const { auth } = require('./ratelimit');
const fs = require('fs');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // fonction pour creer dossier
    fs.mkdirSync('images', {recursive: true})
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    // const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, 'HotSauces' + Date.now() + '.' + extension);
  }
});
module.exports = multer({storage: storage}).single('image');
