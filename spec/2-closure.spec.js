const { expect } = require('chai');
const { invert, flip, rememberMe } = require('../challenges/2-closure');
const { spy } = require('sinon');

describe('invert', () => {
  it('returns a new function', () => {
    const originalFunc = function() {};
    const invertedOriginalFunc = invert(originalFunc);
    expect(invertedOriginalFunc).to.be.a('function');
    expect(invertedOriginalFunc).to.not.equal(originalFunc);
  });
  it("new function's first argument is passed to the original function",() => {
    let originalFunc = spy();
    let invertedOriginalFunc = invert(originalFunc);
    invertedOriginalFunc('a');
    expect(originalFunc.args[0]).to.eql(['a']);
  })
  it("new function's first 2 arguments are passed to the original function", () => {
    let originalFunc = spy();
    let invertedOriginalFunc = invert(originalFunc);
    invertedOriginalFunc(1, 2);
    expect(originalFunc.args[0]).to.eql([1, 2]);
  });
  it("all of the new function's arguments are passed to the original function",() => {
    let originalFunc = spy();
    let invertedOriginalFunc = invert(originalFunc);
    invertedOriginalFunc(1, 2, 3, 4, 5);
    expect(originalFunc.args[0]).to.eql([1, 2, 3, 4, 5]);
    originalFunc = spy();
    invertedOriginalFunc = invert(originalFunc);
    invertedOriginalFunc('a','c','hello',1,2);
    expect(originalFunc.args[0]).to.eql(['a','c','hello',1,2]);
  });
  it('new function returns negated invocation of the original function', () => {
    let returnsFalse = () => false;
    let returnsTrue = invert(returnsFalse);
    expect(returnsTrue()).to.equal(!returnsFalse());
    let checkIsOdd = (num) => num % 2 === 1;
    let checkIsEven = invert(checkIsOdd);
    expect(checkIsEven(100)).to.equal(!checkIsOdd(100));
    expect(checkIsEven(13)).to.equal(!checkIsOdd(13));
    let isBiggerThan100 = (a, b, c, d) => a + b + c + d > 100;
    let isLessThanOrEqualTo100 = invert(isBiggerThan100);
    expect(isLessThanOrEqualTo100(10, 10, 10, 10)).to.equal(!isBiggerThan100(10, 10, 10, 10));
    expect(isLessThanOrEqualTo100(49, 49, 1, 1)).to.equal(!isBiggerThan100(49, 49, 1, 1));
    expect(isLessThanOrEqualTo100(100, 1, 1, 1)).to.equal(!isBiggerThan100(100, 1, 1, 1));
  });
});

describe('flip', () => {
  it('returns a new function', () => {
    const originalFunc = function() {};
    const flippedOriginalFunc = flip(originalFunc);
    expect(flippedOriginalFunc).to.be.a('function');
    expect(flippedOriginalFunc).to.not.equal(originalFunc);
  });
  it("new function's first argument is passed to the original function", () => {
    let originalFunc = spy();
    let flippedOriginalFunc = flip(originalFunc);
    flippedOriginalFunc('a');
    expect(originalFunc.args[0]).to.eql(['a']);
  });
  it("new function's first 2 arguments are passed to the original function in reverse order", () => {
    let originalFunc = spy();
    let flippedOriginalFunc = flip(originalFunc);
    flippedOriginalFunc(1, 2);
    expect(originalFunc.args[0]).to.eql([2, 1]);
    originalFunc = spy();
    flippedOriginalFunc = flip(originalFunc);
    flippedOriginalFunc('a', 'b');
    expect(originalFunc.args[0]).to.eql(['b', 'a']);
  });
  it("all of the new function's arguments are passed to the original function in reverse order", () => {
    let originalFunc = spy();
    let flippedOriginalFunc = flip(originalFunc);
    flippedOriginalFunc(1, 2, 3, 4, 5);
    expect(originalFunc.args[0]).to.eql([5, 4, 3, 2, 1]);
    originalFunc = spy();
    flippedOriginalFunc = flip(originalFunc);
    flippedOriginalFunc('hello','northcoders',42,100,2019);
    expect(originalFunc.args[0]).to.eql([2019, 100, 42, 'northcoders', 'hello']);
  });
  it('new function returns invocation of original func', () => {
    let subtract = (a, b) => a - b;
    let flipSubtract = flip(subtract);
    let actual = flipSubtract(10, 3);
    let expected = -7;
    expect(actual).to.equal(expected);
    let joinChars = (...letters) => letters.join('-');
    let flipJoin = flip(joinChars);
    actual = flipJoin('a','b','c','d','e');
    expected = 'e-d-c-b-a';
    expect(actual).to.equal(expected);
  });
});

describe('rememberMe', () => {
  it('returns a new function', () => {
    expect(rememberMe()).to.be.a('function');
  });
  it('maintains the functionality of the input function when no args are passed', () => {
    const returnTwo = () => 2;
    const rememberReturnTwo = rememberMe(returnTwo);
    expect(rememberReturnTwo()).to.equal(2);
  });
  it('maintain the functionality of the input function with args', () => {
    const addNums = (a, b, c, d, e) => a + b + c + d + e;
    const rememberAddNums = rememberMe(addNums);
    expect(rememberAddNums(1, 2, 3, 4, 5)).to.equal(15);
  });
  it('only calls the function once per unique set of arguments', () => {
    const addNums = (a, b, c, d, e) => a + b + c + d + e;
    const spiedAdder = spy(addNums);
    const rememberSpiedAdder = rememberMe(spiedAdder);
    expect(rememberSpiedAdder(1, 2, 3, 4, 5)).to.equal(15);
    expect(rememberSpiedAdder(1, 2, 3, 4, 5)).to.equal(15);
    expect(spiedAdder.callCount).to.equal(1);
    expect(rememberSpiedAdder(1, 2, 3, 4, 6)).to.equal(16);
    expect(rememberSpiedAdder(1, 2, 3, 4, 6)).to.equal(16);
    expect(spiedAdder.callCount).to.equal(2);
  });
});
