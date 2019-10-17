/*
* returns true when a string is a palindrome, false otherwise
*/
function palindrome_check(target) {
  squeezed_str = target.toLowerCase().replace(/[\s,'’]+/g, '');
  console.log(`squeezed string is '${squeezed_str}'`)
  array1 = squeezed_str.split('');
  array2 = Array.from(array1);
  array2.reverse();

  return array1.join('') == array2.join('');
}

module.exports = palindrome_check;
