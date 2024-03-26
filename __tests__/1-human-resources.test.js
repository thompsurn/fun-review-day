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
