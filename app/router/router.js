import express from "express";
import mainController from "../controller/mainController.js";
export const router = express.Router();
// import path from "node:path";

// console.log(import.meta.url)

// TODO vos routes
router.get("/", mainController.getRandomCoffees);


router.get("/catalogue", mainController.getCoffeesList);
    

router.get("/entreprise", (req, res) => { //route entreprise
    res.render("entreprise");
});

router.get("/article/:id", mainController.getOneCoffee);
    




router.use((req, res) => {
    //res.status(404).send("Sorry can't find that!");
    res.status(404).render('error');
});

