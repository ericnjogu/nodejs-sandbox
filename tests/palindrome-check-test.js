should = require('should');

const palindrome_check = require('../palindrome-check');

describe ("testing palindrome check", () => {
  phrases = {"this is not a palindrome":false, "Mom":true, "Madam, in Eden, I’m Adam":true};
  for (const [phrase, isPalindrome] of Object.entries(phrases)) {
    it (`should return ${isPalindrome} for "${phrase}"`, () => {
      palindrome_check(phrase).should.equal(isPalindrome);
    });
  }
})
