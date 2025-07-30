import express from "express";
import path from "node:path"; 
import { router } from "./app/router/router.js";
import dotenv from "dotenv"; 
import { fileURLToPath } from "url"; 
import csrf from "csurf";
import session from "express-session";


dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
// app.set("views",path.join(import.meta.dirname, "app", "views"));
// app.use(express.static(path.join(import.meta.dirname, "app", "public")));
app.set("views", path.join(__dirname, "app", "views"));
app.use(express.static(path.join(__dirname, "app", "public")));
// --- Middleware de parsing ---
app.use(express.urlencoded({ extended: true }));
// --- Middleware session (nécessaire pour csurf) ---
app.use(session({
    secret: process.env.SESSION_SECRET || "unsecretpardefault", // mets une vraie valeur dans le .env
    resave: false,
    saveUninitialized: true
}));
// --- Middleware CSRF ---
const csrfProtection = csrf();
app.use(csrfProtection);
// --- Rendre le token accessible dans toutes les vues ---
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});