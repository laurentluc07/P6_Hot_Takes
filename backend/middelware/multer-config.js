const multer = require('multer');
const { auth } = require('./ratelimit');
const fs = require('fs');

// Les différentes extensions autorisés
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

// Le multer permet de sauvegarder les images du disque vers le serveur
const storage = multer.diskStorage({
  // Le dossier ou les images doivent être enregistrés
  destination: (req, file, callback) => {
    // fonction pour creer dossier
    fs.mkdirSync('images', {recursive: true})
    callback(null, 'images');
  },
  // Le nom du fichier a télécharger
  filename: (req, file, callback) => {
    // const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, 'HotSauces' + Date.now() + '.' + extension); // création d'un nom de fichier unique
  }
});
module.exports = multer({storage: storage}).single('image');
