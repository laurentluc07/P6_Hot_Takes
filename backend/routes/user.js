//importation d'Express et des différents middelware
const express = require('express');
const ratelimit = require('../middelware/ratelimit');
const emailvalidator = require('../middelware/email-validator');
const router = express.Router();  //importation du package router d'Express

//assignation des controllers (création du chemin user dans les controllers)
const userCtrl = require('../controllers/user');

//définition du chemin 'signup' et 'login'
router.post('/signup',emailvalidator, ratelimit.auth, userCtrl.signup);
router.post('/login',emailvalidator, ratelimit.auth, userCtrl.login);

//exportation du router
module.exports = router;
