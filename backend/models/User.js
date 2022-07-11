//importation du package Mongoose
const mongoose = require('mongoose');
//importation du package Mongoose-unique-validator
const uniqueValidator = require('mongoose-unique-validator');

//création du Shema
const usersModels= mongoose.Schema({
  email: {
    type: String, //type attendu: du Texte
    required: true, //Champs obligatoire
    unique: true //impossibilité de se s'incrire 2 fois avec la même adresse email
  },
  password: {
    type: String, //type attendu: du Texte
    required: true //Champs obligatoire
  }
});

//eviter les doublons d'utilisateur avec la même adresse email
usersModels.plugin(uniqueValidator);

//exportation du Model User
module.exports = mongoose.model('User', usersModels);

// ne pas oublier le ratelimit
// comment utiliser un middleware avec express
// un middleware permet de gérer la sécurité d'une application
// express-rate-limit
// installer email-validator
