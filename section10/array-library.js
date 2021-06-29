let index = 0;
const choices = [];
let bookChoice = prompt(`Enter Fav Book ${  (index++) + 1}`);
choices.push(bookChoice);

bookChoice = prompt(`Enter Fav Book ${  (index++) + 1}`);
choices.push(bookChoice);

bookChoice = prompt(`Enter Fav Book ${  (index++) + 1}`);
choices.push(bookChoice);

bookChoice = prompt(`Enter Fav Book ${  (index++) + 1}`);
choices.push(bookChoice);

bookChoice = prompt(`Enter Fav Book ${  (index++) + 1}`);
choices.push(bookChoice);

bookChoice = prompt(`Enter Fav Book ${  (index++) + 1}`);
choices.unshift(bookChoice);

choices.pop();
console.log(choices);
