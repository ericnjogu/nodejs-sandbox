should =  require('should');

find_repeated = require('../find_repeated');

const array1 = [1,2,3,4,6,6,7,8,9,5,2,6,1,8];

describe('testing find repeated', () => {
  it('should not return a none type', () => {
    should.exist(find_repeated(array1));
  })

  it('should return a map with matching values', () => {
  find_repeated(array1).should.be.eql({1:2, 2:2, 6:3, 8:2});
  })
})
