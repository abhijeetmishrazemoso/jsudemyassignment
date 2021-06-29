const choices = [];

function pushBooks(noOfTimes) {
  for (let index1 = 0; index1 < noOfTimes; index1++) {
    const element = prompt(`Enter Fav Book ${(index1) + 1}`);
    if (index1 === noOfTimes - 1) {
      choices.unshift(element);
      break;
    }
    choices.push(element);
  }
  choices.pop();
  console.log(choices);
}
pushBooks(6);