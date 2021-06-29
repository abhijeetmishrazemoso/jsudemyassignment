let restaurantMenu = {
  name: 'Sitara',
  biryani: 75,
  'Milk Shake': 25,
  'Pav bhaji': 30,
  'Veg pulav': 45,
  'North Indian Veg thali': 125,
};
function listPrices(restaurant) {
  let fullMenu='';
  for (const key in restaurant) {
    if(key === 'name') {
      continue;
    }
    fullMenu += `${key} item's price is ${restaurant[key]}\n`;
  }
  alert(fullMenu);
}

function getMenuItemSelected() {
  return prompt('Which item you wish to have?:');
}

listPrices(restaurantMenu);
//did what i understood
alert(`You selected ${getMenuItemSelected()}`);