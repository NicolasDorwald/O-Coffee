import express from "express";
import path from "node:path";
import { router } from "./app/router/router.js";
import dotenv from "dotenv";


dotenv.config();


const app = express();


app.set("view engine", "ejs");


app.set("views",path.join(import.meta.dirname, "app", "views"));
app.use(express.static(path.join(import.meta.dirname, "app", "public")));

app.use(express.urlencoded({ extended: true }));
app.use(router);


app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
