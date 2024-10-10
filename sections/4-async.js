const { findIngredients, priceCheck } = require("../utils/ingredientsUtils");

const processItemRequest = (foodItem) => {
    return findIngredients(foodItem)
    .then((ingredients) => {
        return { 
            itemName: foodItem,
            ingredients: ingredients
        }
    })
    .catch(() => {
        return {
            msg: `${foodItem} not found`
        }
    })
};

const orderIngredients = (item) => {
    const ingredientsList = {
      cake: ["eggs", "flour", "butter", "sugar"],
      bread: ["flour", "water", "yeast"],
    };
  
    const stock = {
      eggs: true,
      flour: true,
      butter: true,
      sugar: true,
      water: true,
      yeast: false, // Let's say yeast is out of stock
    };
  
    return new Promise((resolve, reject) => {
      const ingredients = ingredientsList[item];
  
      if (!ingredients) {
        reject({ msg: "could not find one or more ingredients" });
      }
  
      const outOfStock = ingredients.some(ingredient => !stock[ingredient]);
  
      if (outOfStock) {
        reject({ msg: "could not find one or more ingredients" });
      } else {
        resolve({
          itemName: item,
          ingredients,
          totalCost: ingredients.length * 30, // Example cost logic
        });
      }
    });
  };
  
  

module.exports = { processItemRequest, orderIngredients };
