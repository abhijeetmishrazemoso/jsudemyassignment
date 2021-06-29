console.log("Welcome to the portal");
console.log("What would you gift your wife?");
const roses = "roses";
console.log(roses);
const jewelry = "jewelry";
console.log(jewelry);
const cards = "card";
console.log(cards);
const moneyy = "money";
console.log(moneyy);
const candy = "candy";
console.log(candy);
const electronics = "electronics";
console.log(electronics);
const books = "books";
console.log(books);
const puppy = "puppy";
const colon = ":";
console.log(puppy);

let choice = prompt("Enter your choice:",moneyy);

if(choice === roses){
    console.log(roses+colon+ "Expressing your love to your wife, women love them, gift her!");
}
else if(choice === jewelry){
    console.log(jewelry+ colon+"Helping her impress her friends? Nice choice!");
}
else if(choice === cards){
    console.log(cards+colon+"Expressing your love to your wife, women love them, gift her!");
}
else if(choice === moneyy){
    console.log(moneyy + colon+"She can buy what she wants, nothing can get better");
}
else if(choice === candy){
    console.log(candy+ colon+"Wanna give her a good taste: Feel free!")
}
else if(choice === electronics){
    console.log(electronics+ colon + "Buy her a nice hearing aid!")
}
else if(choice === books){
    console.log(books+colon+"You want her to become wise! Good invest in your future!")
}
else if(choice === puppy){
    console.log(puppy +colon + "You are gifting her another friend");
}else{
    console.log("Choice did not match the options! Make a wise choice!")
}