/*
"Write a function that given an array of integers,
it return a dictionary object whose keys are integers that appear multiple times
and its values are number of times each number appears.

Example 1
[1,2,3,4,6,6,7,8,9,5,2,6,1,8] #=> {1:2, 2:2, 6:3, 8:2}"
*/

function find_repeated(numbers) {
  result = {};
  test_map = {1:4, 5:6};
  numbers.map(number => {
    if (result[number]) {
      result[number] += 1;
    } else {
      result[number] = 1;
    }
  })

  duplicates = {};
  for (let [number, count] of Object.entries(result)) {
    if (count > 1) {
      duplicates[number] = count;
    }
  }

  return duplicates;
}

module.exports = find_repeated;
