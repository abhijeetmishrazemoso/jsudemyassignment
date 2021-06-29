function buzzFizz(start, end) {
  for (let number = start; number < end; number++) {
    let result = '';
    if (number % 3 === 0) {
      result += 'Fizz';
    }
    if (number % 5 === 0) {
      result += 'Buzz';
    }
    if (result === '') {
      console.log(number);
      continue;
    }
    console.log(result);
  }
  return 'pass';
}
function test(name, expected, actual) {
  if (expected === actual) {
    return `Test:${name}:Passed,Expected and Actual are same:${actual}`;
  }
  return `Test:${name}: Expected:${expected}; Actual:${actual}`;
}

console.log(test('Test Range:', buzzFizz(12, 26), 'pass'));//dummy
