let randomNumb = Math.random();

let min = prompt("Enter the minimum Number");
let max = prompt("Enter the maximum Number");

function getRandomNumber(min, max){
    let i=0;
    let temp = Math.random();
    while(!(Math.floor(temp)>min && Math.floor(temp)<max)){
        console.log(temp);
        temp = Math.floor( Math.random() * (max-1));
    }
    return temp;
}
console.log(getRandomNumber(min,max));