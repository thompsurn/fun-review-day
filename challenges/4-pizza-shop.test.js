const makePizza = require('./4-pizza-shop.js');

describe('makePizza()', () => {
  test('invokes callback with empty string when passed an empty string', (done) => {
    makePizza('', (err, delivery) => {
      expect(delivery).toBe('');
      done();
    });
  });
  test('invokes callback with a hot fresh pizza in a well designed box when passed a single pizza', (done) => {
    makePizza('margherita', (err, delivery) => {
      expect(delivery).toBe('a hot margherita in a well designed box');
      done();
    });
  });
});
