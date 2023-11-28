# Utils Documentation

__Please note: Do not change the util functions! The test files rely on their behaviour to remain unchanged.__

## findIngredients()

### Syntax

```js
findIngredients(item);
```

### Parameters

- `item`
  - A `string` of the item that you would like the ingredients for

### Return Value

- A Promise
  - **Resolved State:** An Array of strings of each ingredient for the Item
  - **Rejected State:** an Object with a status of "Error" and message of "item not found"

### Description

The `findIngredients()` function is an asynchronous function that returns a `Promise`
that will either resolve with the ingredients for a given item or reject if the item is not found

```js
findIngredients("cake").then((data) => {
  data; //--> ['eggs', 'butter', 'sugar']
});
```

## priceCheck()

### Parameters

- `ingredient`
  - A `string` that is the ingredient to check the price of

### Return Value

- `Promise`
  - **Resolve State:** `object` containing `name`:`string` and `cost`:`number`
  - **Rejected State:** `object` containing `status`:`string` and `message`:`string`

### Description

The `priceCheck()` function is an asynchronous function that returns a `Promise` that will either resolve with the ingredient and its cost or reject with a status and message if the item is out of stock.

```js
priceCheck("flour").then((data) => {
  data; //--> {name: "flour", cost: 10}
});
```
