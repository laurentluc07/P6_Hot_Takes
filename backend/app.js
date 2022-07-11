// Inclusion de Mongoose
const mongoose = require('mongoose');
const express = require('express');
const userRoutes = require('./routes/user');
const dotenv = require('dotenv');
dotenv.config();

// On se connecte à la base de données
  mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//appel de la méthode Express
const app = express();

//Insertion CORS
app.use((req, res, next) => {
  //qui peut accéder à l'API
  res.setHeader('Access-Control-Allow-Origin', '*');
  //Quels header sont authorisés
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  //Quels méthodes sont possible
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//pour tranformer les requête en JSON
app.use(express.json());

//gestion des routes principales
app.use('/api/auth', userRoutes);

//exportation de la constante app
module.exports = app;