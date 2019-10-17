const should = require('should');
const fibo = require('../fibonacci');

describe ("testing fibonacci function", () => {
  it("should return an array", () => {
    Array.isArray(fibo(2)).should.be.true;
  });

  it("should return the requested number of elements", () => {
    fibo(2).should.have.lengthOf(2);
  });

  it("expected sequence should match", () => {
    fibo(3).should.be.equal([0, 1, 1]);
  });
});
