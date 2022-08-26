// Inclusion de Mongoose
const mongoose = require('mongoose');
const express = require('express');
const userRoutes = require('./routes/user');
const saucesRoutes = require('./routes/sauces');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

// On se connecte à la base de données
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//appel de la méthode Express
const app = express();

//Insertion CORS
// Le «  Cross-origin resource sharing » (CORS) ou « partage des ressources entre origines multiples »
// est un mécanisme qui consiste à ajouter des en-têtes HTTP afin de permettre
// à un agent utilisateur d'accéder à des ressources d'un serveur situées sur une autre origine que le site
// courant. Un agent utilisateur réalise une requête HTTP multi-origine ( cross-origin ) lorsqu'il demande
// une ressource provenant d'un domaine, d'un protocole ou d'un port différent de ceux utilisés pour
// la page courante.
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

//gestion des routes principales (différents chemin de l'api (Authentification, Sauces et Images))
app.use('/api/auth', userRoutes);
app.use('/api/sauces', saucesRoutes);
app.use("/images", express.static(path.join(__dirname, "images"))); // Gestion des fichiers images de manière static

//exportation de la constante app
module.exports = app;
