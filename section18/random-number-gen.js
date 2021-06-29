const randomNumb = Math.random();

const min = prompt('Enter the minimum Number');
const max = prompt('Enter the maximum Number');

function getRandomNumber(min, max) {
  const i = 0;
  let temp = Math.random();
  while(!(Math.floor(temp) > min && Math.floor(temp) < max)) {
    console.log(temp);
    temp = Math.floor(Math.random() * (max - 1));
  }
  return temp;
}
console.log(getRandomNumber(min, max));
