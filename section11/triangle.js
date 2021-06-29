const specialChar = '*';
let result = '';
for (let index = 1; index <= 5; (index += 1)) {
  for (let index1 = 1; index1 < index + 1; (index1 += 1)) {
    result += specialChar;//fix
  }
  console.log(result);
  result = '';
}
