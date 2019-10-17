/*
return a fibonacci series of the length provided
*/
function fibonacci(length) {
  result = []
  for (var i = 0; i < length; i++) {
    if (i < 2) {
      result[i] = i;
    } else {
      result[i] = result[i-1] + result[i-2];
    }
  }

  return result;
};

module.exports = fibonacci;
