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

const orderIngredients = () => {};

module.exports = { processItemRequest, orderIngredients };
