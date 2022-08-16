const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it('should return a revert string', () => {
      const str = "Hello World!";
      const revStr = "!dlroW olleH";

      const revResult = new Algo().reverse(str);
      expect(revResult).toEqual(revStr);
    })

  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it('should take a string as an argument and return the boolean `true` if the provided string is a palindrome. ', () => {
      const str = "racecar";
      const result = new Algo().
    })
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
  });
});
