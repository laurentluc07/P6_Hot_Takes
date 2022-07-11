//importation du package router d'Express
const express = require('express');
const ratelimit = require('../middleware/ratelimit');
const router = express.Router();

//assignation des controllers
const userCtrl = require('../controllers/user');

//définition du chemin 'signup' et 'login'
router.post('/signup', ratelimit, userCtrl.signup);
router.post('/login', ratelimit, userCtrl.login);

//exportation du router
module.exports = router;
