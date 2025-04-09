import express from "express";
export const router = express.Router();
// import path from "node:path";

// console.log(import.meta.url)

// TODO vos routes
router.get("/", (req, res) => { // route accueil
    res.render("accueil");
});

router.get("/catalogue", (req, res) => { // route catalogue
    res.render("catalogue");
});

router.get("/entreprise", (req, res) => { //route entreprise
    res.render("entreprise");
});

router.get("/article", (req, res) => { // route article
    res.render("article");
});




router.use((req, res) => {
    //res.status(404).send("Sorry can't find that!");
    res.status(404).render('error');
});

