/** @format */

const express = require("express");
//const passport = require("passport");
const router = express.Router();
const Produits = require("../modeles/produits");
const Usagers = require("../modeles/usagers");
const mongoose = require("mongoose");
const estGestion = require("../config/auth");

//const nodeJSpath = require("path");
//const fs = require("fs");

//GET TOUT LES PRODUITS
router.get("/femme", (requete, reponse) => {
    Produits.find({ genre: "femme" }, null)
        .exec()
        .then((produits) =>
            reponse.render("produits", {
                titre: "Produits femme",
                produits,
                requete,
				genre: "femme"
            })
        )
        .catch((err) => console.log(err));
});
//GET PRODUIT HOMME
router.get("/homme", (requete, reponse) => {
    Produits.find({ genre: "homme" }, null)
        .exec()
        .then((produits) =>
            reponse.render("produits", {
                titre: "Produits homme",
                produits,
                requete,
                genre: "homme" // Ajout de la variable genre
            })
        )
        .catch((err) => console.log(err));
});

/** 
/**Les route suivante n'on pas été tester */
//GET UN PRODUIT (à tester)
router.get("/:id", (requete, reponse) => {
	const id = requete.params.id;
	Produits.find({ _id: id }, null)
		.exec()
		.then((produits) =>
			reponse.render("produits", {
				titre: "Prduits",
				produits,
				requete
			})
		)
		.catch((err) => console.log(err));
});

//GET AJOUTER UN PRODUIT (a tester)
/*
router.get("/add", estGestion, (requete, reponse) =>
	reponse.render("addProduits")
);

//POST AJOUTER UN PRODUIT (a tester)
router.post("/add", estGestion, (requete, reponse) => {
	const {
		genre,
		description,
		type,
		prix,
		taille,
		nom,
		couleur,
		fichierImage,
	} = requete.body;
	let errors = [];

	if (isNaN(prix)) {
		errors.push({ msg: "Le champ prix doit être numérique" });
	}

	if (
		!genre ||
		!type ||
		!taille ||
		!nom ||
		!isbn ||
		!description ||
		!couleur ||
		!prix ||
		!fichierImage
	) {
		errors.push({ msg: "Veuillez remplir tout les champs du formulaire" });
		console.log(
			genre,
			description,
			type,
			prix,
			taille,
			nom,
			couleur,
			fichierImage
		);
	}

	if (errors.length > 0) {
		reponse.render("addProduits", {
			genre,
			description,
			type,
			prix,
			taille,
			nom,
			couleur,
			fichierImage,
		});
	} else {
		const newProduits = new Produits({
			_id: new mongoose.Types.ObjectId(),
			genre,
			description,
			type,
			prix,
			taille,
			nom,
			couleur,
			fichierImage,
		});

		newProduits
			.save()
			.then((produits) => {
				requete.flash(
					"success_msg",
					"Ajout du nouveau produits réussi"
				);
				reponse.redirect("/produits");
			})
			.catch((err) => console.log(err));
	}
});

//GET MODIFIER UN PRODUIT (a tester)
router.get("/edit/:id", estGestion, (requete, reponse) => {
	const id = requete.params.id;
	Produits.findOne({ _id: id })
		.exec()
		.then((produit) => {
			reponse.render("editProduits", {
				titre: "Modifier un produit",
				produit,
			});
		})
		.catch((err) => console.log(err));
});

//POST MODIFIER UN PRODUIT (a tester)
router.post("/edit", estGestion, (requete, reponse) => {
	const {
		genre,
		description,
		type,
		prix,
		taille,
		nom,
		couleur,
		fichierImage,
	} = requete.body;
	let errors = [];

	if (isNaN(prix)) {
		errors.push({ msg: "Le champ prix doit être numérique" });
	}

	if (
		!genre ||
		!type ||
		!taille ||
		!nom ||
		!isbn ||
		!description ||
		!couleur ||
		!prix ||
		!fichierImage
	) {
		errors.push({ msg: "Remplir tout les case du formulaire" });
		console.log(
			genre,
			description,
			type,
			prix,
			taille,
			nom,
			couleur,
			fichierImage
		);
	}

	if (errors.length > 0) {
		reponse.render("editProduits", {
			errors,
			genre,
			description,
			type,
			prix,
			taille,
			nom,
			couleur,
			fichierImage,
		});
	} else {
		Produits.findOneAndUpdate(
			{ _id: id },
			{
				genre,
				description,
				type,
				prix,
				taille,
				nom,
				couleur,
				fichierImage,
			},
			{ new: true }
		)
			.then((produit) => {
				requete.flash("success_msg", "Modification du produit réussi");
				reponse.redirect("/produits");
			})
			.catch((err) => console.log(err));
	}
});

//GET SUPPRIMER PRODUITS (a tester)
router.get("/delete/:id", estAdmin, (requete, reponse) => {
	const id = requete.params.id;
	Produits.findByIdAndDelete(id).then(
		requete.flash("success_msg", "Produit supprimé avec succes"),
		reponse.redirect("/produits")
	);
});
*/
module.exports = router;
