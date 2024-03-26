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

  describe('new vending machine methods', () => {
    describe('addStock', () => {
      test('should add new key:value pair of name and stock in the correct position when passed in the position and stock values', () => {
        const testMachine = new VendingMachine
        const stock = 'marsBars'
        const position = 'A'
  
        const actual = testMachine.addStock(stock, position)
        const expected = { 
        A: { name: 'marsBars' },
        B: {},
        C: {} 
      }
        expect(actual).toEqual(expected)
      })
    })
      test('should add 2 new key:value pairs of price and quantity in the correct position when passed in the cost and amount values', () => {
        const testMachine = new VendingMachine
        const stock = 'marsBars'
        const position = 'A'
        const cost = 50
        const amount = 6
    
        const actual = testMachine.addStock(stock, position, cost, amount)
        const expected = { 
        A: { name: 'marsBars', price: 50, quantity: 6 },
        B: {},
        C: {} 
        }
        expect(actual).toEqual(expected)
      })
    })
    describe('purchaseItem', () => {
      test('should check if the amount of credit in the machine is greater than the item to be purchased and return an error message if it is not', () => {
        const testMachine = new VendingMachine
        const marsBar = {name: 'marsBar', price: 50, quantity: 6 }

        testMachine.addStock(marsBar, 'A')
        testMachine.addCredit(40)

        const actual = testMachine.purchaseItem('A')
        const expected = 'Insufficient credit!'
        expect(actual).toBe(expected)
      })
      test('should decrease the quantity of the stock if there is sufficient credit and return the name of the product purchased', () => {
        const testMachine = new VendingMachine
        const stock = 'marsBar'
        const position = 'A'
        const cost = 50
        const amount = 6
    
        testMachine.addStock(stock, position, cost, amount)
        testMachine.addCredit(60)
        const actual = testMachine.purchaseItem(position)

        const expected = { 
        A: { name: 'marsBar', price: 50, quantity: 5 },
        B: {},
        C: {} 
        }
        expect(actual).toBe('marsBar')
        expect(testMachine.stock).toEqual(expected)
      })
    })

})
