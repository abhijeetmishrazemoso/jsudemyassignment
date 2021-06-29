let story = "Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need."
let startPosition = 0;
let temp = '';
let positionFound = null;
story = story.replace(/cheeseburgers/g,"hamburgers");
console.log(story);
const wordToFind = "bun";
do{
    let firstHalf = '', secondHalf = '';
    positionFound = story.indexOf(wordToFind,startPosition);
    if(positionFound ==-1) { 
        break;
    }
    temp = story.slice(positionFound,positionFound+3).toUpperCase();
    firstHalf = story.substring(0,positionFound);
    secondHalf = story.substring(positionFound+3,story.length);
    story = firstHalf+temp+secondHalf;

}while(positionFound!==-1);
//bun replaced with capitals
console.log(story);
console.log("Number of characters in string are "+story.length);
console.log("Number of words in the string are "+story.split(' ').length);
