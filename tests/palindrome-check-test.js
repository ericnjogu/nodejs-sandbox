should = require('should');

const palindrome_check = require('../palindrome-check');

describe ("testing palindrome check", () => {
  phrase1 = "this is not a palindrome";
  it (`should return false for "${phrase1}"`, () => {
    palindrome_check(phrase1).should.be.false();
  });

  phrase2 = "Mom";
  it (`should return true for "${phrase2}"`, () => {
    palindrome_check(phrase2).should.be.true();
  });

  phrase3 = "Madam, in Eden, I’m Adam";
  it (`should return true for "${phrase3}"`, () => {
    palindrome_check(phrase3).should.be.true();
  });
})
