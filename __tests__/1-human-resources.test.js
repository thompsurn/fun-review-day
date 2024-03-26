const NCFruitBowl = require("../data/poll-data.js");
const {
  createPoll,
  makeNameTags,
} = require("../sections/1-human-resources.js");

/*
You have been tasked with making name tags to be worn by guests at an upcoming company meeting. You have the data for the guests who have been invited and you will need to add some information on what their name tags should read.

Given an array of guest objects containing title, forename, surname and company keys, your makeNameTags function should return an array containing objects with an additional key, nameTag, the value of which is a string consisting of the title, forename, surname and company

*/

describe("makeNameTags", () => {
  test('returns an empty array when given no input', () => {
    const guests = []

    const actual = makeNameTags(guests)
    const expected = []
    expect(actual).toEqual(expected)
  })
  test("returns a nameTag value to an array of guest objects with given keys", () => {
    const guests = [
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      },
      {
        title: "Mr",
        forename: "Kermit",
        surname: "The Frog",
        age: 35,
        company: "Jim Henson Studios",
      },
    ];
    
    const actual = makeNameTags(guests)
    const expected = [
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
        nameTag : 'Mr Sam Caine, Northcoders'
      },
      {
        title: "Mr",
        forename: "Kermit",
        surname: "The Frog",
        age: 35,
        company: "Jim Henson Studios",
        nameTag : 'Mr Kermit The Frog, Jim Henson Studios'

      },
    ]
    expect(actual).toEqual(expected)
  });
});

/*
Usually we'd use SurveyMonkey, but the managers have taken to building polls across the organisation as strings. Given an array of strings, please build a much more useful poll object.
*/

describe('createPoll', () => {
  test('should return a single fruit with a single occurance', () => {
    const NCFruitBowl = ['apple']

    const actual = createPoll(NCFruitBowl)
    const expected = {apple : 1}
    expect(actual).toEqual(expected)
  })
  test('should return the accumulated total of fruit when the same fruit is passed more than once', () => {
    const NCFruitBowl = ['apple', 'apple', 'apple']

    const actual = createPoll(NCFruitBowl)
    const expected = {apple : 3}
    expect(actual).toEqual(expected)

  })
  test('should return the accumulated total of different fruits when passed more than once', () => {
    const NCFruitBowl = ['apple', 'pear', 'pear', 'apple', 'orange']

    const actual = createPoll(NCFruitBowl)
    const expected = {apple : 2, pear : 2, orange: 1}
    expect(actual).toEqual(expected)

  })
  test('should return the accumulated total of different fruits when passed a large array of fruits from a seperate file ', () => {
    const NCFruitBowl = require('../data/poll-data.js')

    const actual = createPoll(NCFruitBowl)
    const expected = {
      apple: 276,
      pear: 223,
      banana: 263,
      orange: 238,
      'lonesome plum': 1
    }
    expect(actual).toEqual(expected)

  })
})