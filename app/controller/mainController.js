import dataMappers from '../dataMappers/dataMappers.js'; 

const mainController = {


    async getCoffeesList(req, res) {
      try {
        const coffeesList = await dataMappers.getAllCoffees();
        //console.log("Données récupérées : ", coffeesList);
        res.render('catalogue', {
          coffeesList,
        });
        } catch (error) {
        console.error(error);
        res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },


    async getOneCoffee(req, res) {
      try {
        const id = req.params.id;
        console.log(id)
        const onlyOneCoffee = await dataMappers.getOneCoffee(id);
        console.log("Données récupérées : ", onlyOneCoffee);
          if (onlyOneCoffee) {
            res.render('article', { onlyOneCoffee });
          } else {
            res.render('error')
          }
        } catch (error) {
        console.error(error);
        res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },


    async getRandomCoffees(req, res) {
      try {
          const coffeesList = await dataMappers.getAllCoffees();
          const randomCoffees = [];
          while (randomCoffees.length < 3) {
              const randomIndex = Math.floor(Math.random() * coffeesList.length);
              const coffee = coffeesList[randomIndex];
              if (!randomCoffees.includes(coffee)) {
                  randomCoffees.push(coffee);
              }
          }
          res.render('accueil', { randomCoffees });
      } catch (error) {
          console.error(error);
          res.status(500).send(`An error occurred: ${error.message}`);
      }
  }

}


export default mainController;