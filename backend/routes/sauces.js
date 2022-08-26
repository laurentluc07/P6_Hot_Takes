//Importation du router d'Express
const express = require('express');
const router = express.Router();
const ratelimit = require('../middelware/ratelimit');

//importation des controllers
const saucesCtrl = require('../controllers/sauces');

//importation du Middleware 'auth'
const auth = require('../middelware/auth');

//importation du Middelware 'multer'
const multer = require('../middelware/multer-config');

//Définition des Router
router.post('/', ratelimit.routePpd, auth, multer, saucesCtrl.createSauce);
router.get('/:id', ratelimit.routeGet, auth, saucesCtrl.getOneSauce);
router.put('/:id',ratelimit.routePpd, auth, multer, saucesCtrl.modifySauce);
router.delete('/:id',ratelimit.routePpd, auth, saucesCtrl.deleteSauce);
router.get('/',ratelimit.routeGet, auth, saucesCtrl.getAllSauces);
router.post('/:id/like',ratelimit.routePpd, auth, saucesCtrl.createLike);

//exportation des router
module.exports = router;
