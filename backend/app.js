// Inclusion de Mongoose
const mongoose = require('mongoose');

// On se connecte à la base de données
// N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
const username = 'luclaurent';
const password = 'azerty1234';
// mongodb+srv://luclaurent:<password>@cluster0.lo1my.mongodb.net/?retryWrites=true&w=majority
  mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.lo1my.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// // Création du schéma pour les commentaires
// var identifiantsSchema = new mongoose.Schema({
//   pseudo : { type : String, match: /^[a-zA-Z0-9-_]+$/ },
//   password : String,
//   date : { type : Date, default : Date.now }
// });

// // Création du Model pour les commentaires
// var IdentifiantsModel = mongoose.model('commentaires', identifiantsSchema);

// // On crée une instance du Model
// var identifiants = new IdentifiantsModel({ pseudo : 'luclaurent' });
// identifiants.password = 'azerty1234';

// // On le sauvegarde dans MongoDB !
// identifiants.save(function (err) {
//   if (err) { throw err; }
//   console.log('Identifiants ajouté avec succès !');
//   // On se déconnecte de MongoDB maintenant
//   mongoose.connection.close();
// });
