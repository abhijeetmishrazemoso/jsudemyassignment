const randomNumb = Math.random();

const min = prompt('Enter the minimum Number');
const max = prompt('Enter the maximum Number');

function getRandomNumber(minimum, maximum) {
  let temp = Math.random();
  while (!(Math.floor(temp) > minimum && Math.floor(temp) < maximum)) {
    console.log(temp);
    temp = Math.floor(Math.random() * (maximum - 1));
  }
  return temp;
}
console.log(getRandomNumber(min, max));
