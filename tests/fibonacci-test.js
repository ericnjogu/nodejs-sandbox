const should = require('should');
const fibo = require('../fibonacci');

describe ("testing fibonacci function", () => {
  it("should return an array", () => {
    fibo(2).should.be.Array();
  });

  it("should return the requested number of elements", () => {
    fibo(2).should.have.lengthOf(2);
  });

  it("expected sequence should match", () => {
    fibo(2).should.be.eql([0, 1]);
  });

  it("expected sequence should match", () => {
    fibo(3).should.be.eql([0, 1, 1]);
  });

  it("expected sequence should match", () => {
    fibo(7).should.be.eql([0, 1, 1, 2, 3, 5, 8]);
  });
});
