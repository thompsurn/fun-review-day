const { processItemRequest, orderIngredients } = require("../sections/4-async");
describe("05 Async", () => {
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
    test("if item not found resolves with object with msg of `<item> not found`", () => {
      return processItemRequest("mashed potatoes").then((error) => {
        expect(error.msg).toBe("mashed potatoes not found");
      });
    });
  });
  describe("Task 2: orderIngredients()", () => {
    test("returns a promise", () => {
      expect(orderIngredients("cake")).toBeInstanceOf(Promise);
    });
    
    test("resolves with an object containing the requested food item and ingredients array", async () => {
      const response = await orderIngredients("cake");
      expect(response.itemName).toBe("cake");
      expect(response.ingredients).toEqual(["eggs", "flour", "butter", "sugar"]);
    });
    
    test("rejects if any of the ingredients are not in stock", async () => {
      await expect(orderIngredients("bread")).rejects.toEqual({
        msg: "could not find one or more ingredients",
      });
    });    
  });
});
