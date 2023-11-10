const VendingMachine = require("../sections/2-oop-vending-machine.js");

describe("Vending Machine", () => {
  describe('properties', () => {
    test("properties", () => {
      const testVendingMachine = new VendingMachine();
      expect(testVendingMachine).toHaveProperty("credit")
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
      expect(testVendingMachine.credit).toBe(0)
      testVendingMachine.addCredit(10)
      expect(testVendingMachine.credit).toBe(10)

      const alternativeTestVendingMachine = new VendingMachine()
      alternativeTestVendingMachine.addCredit(48)
      expect(alternativeTestVendingMachine.credit).toBe(48)
    })
    test("accumulates the amount given", () => {
      const testVendingMachine = new VendingMachine();
      expect(testVendingMachine.credit).toBe(0)
      testVendingMachine.addCredit(10)
      expect(testVendingMachine.credit).toBe(10)
      testVendingMachine.addCredit(40)
      expect(testVendingMachine.credit).toBe(50)
    })
  });
});
