const { expect } = require("chai");
const makePizza = require("../challenges/4-pizza-shop");

describe("makePizza()", () => {
  it("invokes callback with empty string when passed an empty string", done => {
    makePizza("", (err, delivery) => {
      expect(delivery).to.eql("");
      done();
    });
  });
  it("invokes callback with a hot fresh pizza in a well designed box when passed a single pizza", done => {
    makePizza("margherita", (err, delivery) => {
      expect(delivery).to.equal("a hot margherita in a well designed box");
      done();
    });
  });
});
