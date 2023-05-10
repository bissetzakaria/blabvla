const express = require("express");
const router = express.Router();
// ajout des routes pour l'authentification

router.get("/", (requete, reponse) => {
  reponse.render("accueil", { titre: "Fashion Vogue" });
});

module.exports = router;
