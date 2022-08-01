//importation du package router d'Express
const express = require('express');
const ratelimit = require('../middelware/ratelimit');
const emailvalidator = require('../middelware/email-validator');
const router = express.Router();

//assignation des controllers
const userCtrl = require('../controllers/user');

//définition du chemin 'signup' et 'login'
router.post('/signup',emailvalidator, ratelimit.auth, userCtrl.signup);
router.post('/login',emailvalidator, ratelimit.auth, userCtrl.login);

//exportation du router
module.exports = router;
