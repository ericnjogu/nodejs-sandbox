/*
return a fibonacci series till the number shown
*/
function fibonacci(limit) {
  // loop up to limit
  var result = [];
  if (limit == 1) {
    result = [0];
  } else if (limit == 2) {
    result =  [0, 1];
  }
  var i;
  for (i = 2; i <= limit; i++) {
    result[i] = result[i-1] + result[i-2];
  }
  return result;
};

module.exports = fibonacci;
