const {
  deepEntries,
  deeplyEquals,
  flat,
} = require("../sections/5-recursion.js");

describe("recursion", () => {
  describe("deepEntries", () => {
    test("Will return an empty array when object is empty", () => {
      const actual = deepEntries({})
      const expected = []
      expect(actual).toEqual(expected)
    });
    /* single entry
    deepEntries({ name: "Sam" });
  // returns [ ["name", "Sam"] ]
  */
    test("Will return a single key:value pair when the object contains one", () => {
      const entries = {name: 'sam'}

      const actual = deepEntries(entries)
      const expected = [['name', 'sam']]
      expect(actual).toEqual(expected)
    });
    /* multiple entries
    deepEntries({ name: "Sam", favBook: "Blood Meridian" });
    // returns [ ["name", "Sam"], ["favBook", "Blood Meridian"] ]
    */
    test("Will return a more than one key:value pair when the object contains more than one", () => {
      const actual = deepEntries({name: 'sam', favBook: 'bloodMeridian'})
      const expected = [['name', 'sam'], ['favBook', 'bloodMeridian']]
      expect(actual).toEqual(expected)
    });
    /* handles nested object 
    deepEntries({ name: "Sam", pets: { name: "fido" } }); 
    */
    test("handles a nested object to return its values in a nested array", () => {
      const actual = deepEntries({ name: "sam", pets: { name: "fido" } }); 
      const expected = [
        ["name", "sam"],
        ["pets",[["name", "fido"]]]
      ]
      expect(actual).toEqual(expected)
    });
    /* handles a deeper layer of nesting
    deepEntries({
      name: "Sam",
      favBook: { title: "Blood Meridian", author: { name: "Cormac McCarthy" } },
    });
    */
    test("handles a deeply nested object to return its values in a nested array", () => {
      const actual = deepEntries({
        name: "Sam",
        favBook: { title: "Blood Meridian", author: { name: "Cormac McCarthy" } },
      });
      const expected = [
        ["name","Sam"],
        ["favBook",[["title","Blood Meridian"],["author", [["name","Cormac McCarthy"]]]
      ]]]
      expect(actual).toEqual(expected)
    });
  });
  describe('deeplyEquals', () => {
    //deeplyEquals("a", "a"); // true
    test('should return true when both strings are identical', () => {
      const actual = deeplyEquals('a', 'a')
      const expected = true
      expect(actual).toBe(expected)
    })
    //deeplyEquals("a", "b"); // false
    test('should return false when both strings are not identical', () => {
      const actual = deeplyEquals('a', 'b')
      const expected = false
      expect(actual).toBe(expected)
    })
    //deeplyEquals([1, 2, { a: "hello" }], [1, 2, { a: "hello" }]); // true
    test('If passed arrays or objects, the function will check the contents for equality.', () => {
      const actual = deeplyEquals([1, 2, { a: "hello" }], [1, 2, { a: "hello" }]);
      const expected = true
      expect(actual).toBe(expected)
    })
  })
})

