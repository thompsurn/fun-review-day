const VendingMachine = require("../sections/2-oop-vending-machine.js");

describe("Vending Machine", () => {
  describe('properties', () => {
    test("properties", () => {
      const testVendingMachine = new VendingMachine();
      expect(testVendingMachine).toHaveProperty("credit")
      expect(testVendingMachine.credit).toBe(0)
    });
    test("properties", () => {
      const testVendingMachine = new VendingMachine();
      expect(testVendingMachine).toHaveProperty("stock")
      expect(testVendingMachine.stock).toHaveProperty("A")
      expect(testVendingMachine.stock).toHaveProperty("B")
      expect(testVendingMachine.stock).toHaveProperty("C")
    });
  });
  describe('addCredit method', () => {
    test("adds initial amount given", () => {
      const testVendingMachine = new VendingMachine();
      testVendingMachine.addCredit(10)
      expect(testVendingMachine.credit).toBe(10)

      const alternativeTestVendingMachine = new VendingMachine()
      alternativeTestVendingMachine.addCredit(48)
      expect(alternativeTestVendingMachine.credit).toBe(48)
    })
    test("accumulates the amount given", () => {
      const testVendingMachine = new VendingMachine();
      testVendingMachine.addCredit(10)
      expect(testVendingMachine.credit).toBe(10)
      testVendingMachine.addCredit(40)
      expect(testVendingMachine.credit).toBe(50)
    })
  });

  describe('helper methods', () => {
    test("creditChecker validates when there is sufficient credit for an item", () => {
      const testVendingMachine = new VendingMachine();
      testVendingMachine.addCredit(60)
      expect(testVendingMachine.creditChecker(50)).toBe(true)
      expect(testVendingMachine.creditChecker(60)).toBe(true)
    })
    test("creditChecker validates when there is sufficient credit for an item", () => {
      const testVendingMachine = new VendingMachine();
      testVendingMachine.addCredit(50)
      expect(testVendingMachine.creditChecker(100)).toBe(false)
    })
  });
});
