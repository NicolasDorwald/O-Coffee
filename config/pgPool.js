import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

if (!process.env.PG_URL) {
    throw new Error("La variable d'environnement PG_URL est manquante !");
  }
  
export const pgPool = new Pool({
    connectionString: process.env.PG_URL,
});
