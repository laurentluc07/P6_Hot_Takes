//Importation du package Mongoose
const mongoose = require('mongoose');

// Création du schéma de données
// On vient créer le schema des données que l'on doit avoir (colonnes)
const sauceSchema = mongoose.Schema({
  userId: {
    type: String, //type attendu: du Texte
    required: true //Champs obligatoire
  },
  name: {
    type: String, //type attendu: du Texte
    required: true//Champs obligatoire
  },
  manufacturer: {
    type: String, //type attendu: du Texte
    required: true//Champs obligatoire
  },
  description: {
    type: String, //type attendu: du Texte
    required: true//Champs obligatoire
  },
  mainPepper: {
    type: String, //type attendu: du Texte
    required: true//Champs obligatoire
  },
  imageUrl: {
    type: String, //type attendu: du Texte
    required: true//Champs obligatoire
  },
  heat: {
    type: Number, //type attendu: un Nombre
    required: true//Champs obligatoire
  },
  likes: {
    type: Number, //type attendu: un Nombre
    default: 0
  },
  dislikes: {
    type: Number, //type attendu: un Nombre
    default: 0
  },
  usersLiked: {
    type: Array, //type attendu: un Tableau
    default: []
  },
  usersDisliked: {
    type: Array, //type attendu: un Tableau
    default: []
  },
});

//exportation du shema Sauce
module.exports = mongoose.model('Sauce', sauceSchema);
