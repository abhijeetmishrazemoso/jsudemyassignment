const originalCost = 98.5;
const amountUserPaying = prompt(`Original Cost is ${originalCost},Enter the amount you are paying`);

// it is not told that function should take the orginal cost
function calculateFinalChange(amountPaying) {
  const change = amountPaying - originalCost;
  if (change === 0) {
    console.log('You gave the exact amount');
  } else if (change < 0) {
    console.log(`You gave too little. You change due is $${change}`);
  } else {
    console.log(`You gave too much. You still owe $${change}`);
  }
}
calculateFinalChange(amountUserPaying);
