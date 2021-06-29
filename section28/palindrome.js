const stringNotPalin = 'String is not a palindrome';
const stringPalin = 'String is a Palindrome';
function isPalindrome(string) {
  const { length } = string;

  for (let index = 0; index < length / 2; index++) {
    if (string[index] !== string[length - index - 1]) {
      return stringNotPalin;
    }
  }
  return stringPalin;
}

function test(name, expected, actual) {
  if (expected === actual) {
    return `Test:${name}:Passed,Expected and Actual are same:${actual}`;
  }
  return `Test:${name}: Expected:${expected}; Actual:${actual}`;
}
console.log(test('Test Palindrome', isPalindrome('anna'), stringPalin));
console.log(test('Test Palindrome', isPalindrome('madam'), stringPalin));
console.log(test('Test Palindrome', isPalindrome('tomato'), stringPalin));
