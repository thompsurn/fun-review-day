function findIngredients(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        cake: ["eggs", "flour", "butter", "sugar"],
        bread: ["flour", "yeast", "water"],
        pasta: ["flour", "eggs"],
      };
      const itemToSend = data[item];
      if (itemToSend !== undefined) {
        resolve([...itemToSend]);
      } else {
        reject({ status: "Error", message: "item not found" });
      }
    }, 100);
  });
}

function priceCheck(ingredient) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ingredients = [
        { name: "eggs", cost: 5 },
        { name: "butter", cost: 25 },
        { name: "sugar", cost: 50 },
        { name: "yeast", cost: 5 },
        { name: "flour", cost: 10 },
      ];

      const foundIngredient = ingredients.find(
        (item) => item.name === ingredient
      );
      if (foundIngredient) {
        resolve({ name: ingredient, cost: foundIngredient.cost });
      } else {
        reject({ status: "error", message: "out of stock" });
      }
    }, 100);
  });
}

module.exports = { findIngredients, priceCheck };
