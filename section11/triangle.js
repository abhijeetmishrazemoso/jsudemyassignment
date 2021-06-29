const specialChar = '*';

for (let index = 1; index <= 5; (index += 1)) {
  for (let index1 = 1; index1 < index + 1; (index1 += 1)) {
    console.log(specialChar);
  }
  console.log('\n');
}
