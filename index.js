
import express from "express";
import path from "node:path"; 
import { router } from "./app/router/router.js";
import dotenv from "dotenv"; 
import { fileURLToPath } from "url"; 

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");


// app.set("views",path.join(import.meta.dirname, "app", "views"));
// app.use(express.static(path.join(import.meta.dirname, "app", "public")));
app.set("views", path.join(__dirname, "app", "views"));
app.use(express.static(path.join(__dirname, "app", "public")));

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
