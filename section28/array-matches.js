const arrayNos = [1, 1, 3, 4, 2, 88, 75, 42, 75, 63, 28, 4];
for (let index = 0; index < arrayNos.length - 1; index++) {
  for (let index2 = index; index2 < arrayNos.length; index2++) {
    const numb1 = arrayNos[index];
    const numb2 = arrayNos[index2];
    if (index === index2) {
      continue;
    }
    if (numb1 === numb2) {
      console.log(`${numb1} mathches at positions ${index + 1} and ${index2 + 1}`);
    } else {
      console.log(`${numb1} and ${numb2} are different`);
    }
  }
}
