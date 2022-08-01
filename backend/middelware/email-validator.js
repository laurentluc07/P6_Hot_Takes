const validator = require("email-validator");

//valider si l'email est ok
module.exports = (req, res, next) => {
  if(validator.validate(req.body.email)) {
    next();
  } else {
    return res.status(400).json({message: 'Veuillez saisir une adresse mail valide'})
  }
};
