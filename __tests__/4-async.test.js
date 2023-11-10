const { processItemRequest, orderIngredients } = require("../sections/4-async");
xdescribe("05 Async", () => {
  describe("Task 1: processItemRequest()", () => {
    test("returns a promise", () => {
      expect(processItemRequest("cake")).toBeInstanceOf(Promise);
    });
    test("promise resolves with an object with an itemName property with a value of the given item", () => {
      return processItemRequest("cake").then((response) => {
        expect(response.itemName).toBe("cake");
      });
    });
    test("promise resolves with an object with an ingredients property with a value of the given items' ingredients", () => {
      return processItemRequest("cake").then((response) => {
        expect(response.ingredients).toEqual([
          "eggs",
          "flour",
          "butter",
          "sugar",
        ]);
      });
    });
    test("if item not found resolves with message of `<item> not found`", () => {
      return processItemRequest("mashed potatoes").then((message) => {
        expect(message).toBe("mashed potatoes not found");
      });
    });
  });
  describe("Task 2: orderIngredients()", () => {
    test("returns a promise", () => {
      expect(orderIngredients("cake")).toBeInstanceOf(Promise);
    });
    test("resolves with an object containing the requested food item and ingredients array", () => {
      return orderIngredients("cake").then((response) => {
        const { itemName, ingredients } = response;
        expect(itemName).toBe("cake");
        expect(ingredients).toEqual(["eggs", "flour", "butter", "sugar"]);
      });
    });
    test("resolved object contains totalCost property, which is the total cost of the ingredients", () => {
      return orderIngredients("cake").then((response) => {
        const { totalCost } = response;
        expect(totalCost).toBe(90);
      });
    });
    test("if any of the ingredients are not in stock should respond with a message of `could not find one or more ingredients`", () => {
      return orderIngredients("bread").then((message) => {
        expect(message).toBe("could not find one or more ingredients");
      });
    });
  });
});
