import { pgPool } from '../../config/pgPool.js'

const dataMappers = {
    async getAllCoffees() {
    try {
        const allCoffees = await pgPool.query("SELECT * FROM coffee");
        return allCoffees.rows; 
    } catch (error) {
        console.error("Erreur SQL :", error);
    }
    },

    async getOneCoffee(id) {
        try {
            const oneCoffee = await pgPool.query("SELECT * FROM coffee WHERE id = $1", [id]);
            //console.log("Données récupérées : ", oneCoffee);
            return oneCoffee.rows[0]; 
        } catch (error) {
            console.error("Erreur SQL :", error);
        }
    }

}

export default dataMappers;
