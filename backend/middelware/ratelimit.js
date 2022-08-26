const rateLimit = require("express-rate-limit");

// Permet de limiter le nombre de requetes au niveau du backend
// Pour se protéger des robots
// On vient donc le faire sur les différentes méthodes (user Auth, sauce POST PUT DELETE, sauce GET)
const Limit = {
  auth: rateLimit({             // Route user AUTH
    windowMs: 15 * 60 * 1000,   // 15 minutes
    max: 100,                   // Limite chaque adresse IP à 100 requêtes par "fenêtre" (ici, par tranche de 15 minutes)
    standardHeaders: true,      // Renvoye les informations de limite de taux dans les en-têtes `RateLimit-*`
    legacyHeaders: false,       // Désactivation des en-têtes `X-RateLimit-*`
  }),
  routePpd: rateLimit({         // Route sauce POST PUT DELETE
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  }),
  routeGet: rateLimit({         // Route sauce GET
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  }),
};

module.exports = Limit;
