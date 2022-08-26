const validator = require("email-validator");

//valider si l'email est ok
module.exports = (req, res, next) => {
  if(validator.validate(req.body.email)) {
    next(); // le next permet donc si mon validate est ok de passer à l'étape suivante
  } else {
    return res.status(400).json({message: 'Veuillez saisir une adresse mail valide'}) // 400 si il y un warning || 200 quand ca passe bien
  }
};
