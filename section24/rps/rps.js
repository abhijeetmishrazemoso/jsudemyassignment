function rps(player1, player2) {
    if ( player1 == "r") {
        if (player2 == "r") {
            return "Tie";
        } else if (player2 == "p") {
            return "Paper beats rock. Player 2 wins.";
        } else if (player2 == "s") {
            return "Rock beats scissors. Player 1 wins.";
        } else {
            return "Player 2 made an invalid selection.";
        }
    } else if ( player1 == "p") {
        if (player2 == "r") {
            return "Paper beats rock. Player 2 wins.";
        } else if (player2 == "p") {
            return "Tie";
        } else if (player2 == "p") {
            return "Scissors beat paper. Player 2 wins.";
        } else {
            return "Player 2 made an invalid selection.";
        }
    } else if ( player1 == "s") {
        if (player2 == "r") {
            return "Rock beats scissors. Player 2 wins.";
        } else if (player2 == " P") {
            return "Scissors beats paper. Player 1 wins.";
        } else if (player2 == "s ") {
            return "Tie";
        } else {
            return "Player 2 made an invalid selection.";
        }
    } else {
        return "Player 1 made an invalid selection.";
    }
}

function test(name, expected, actual){
    if(expected === actual){
        console.log(name +":Test Passed, expected result is "+expected+"and actual result is "+actual);
    }else{
        console.log(name+":Test failed;Expected:"+expected+"Actual: "+actual);
    }
}
const tie = "Tie";

console.log(test("Test:Does Rock equal rock",rps('r','r'),tie));
console.log(test("Test:Does Rock beat scissor",rps('r','p'),"Paper beats rock. Player 2 wins."));
console.log(test("Test:Does Rock Beat Scissor",rps('r','s'),"Rock beats scissors. Player 1 wins."));

console.log(test("Test:Does Rock equal rock",rps('p','r'),"Paper beats rock. Player 1 wins."));
console.log(test("Test:Does Rock beat scissor",rps('p','p'),tie));
console.log(test("Test:Does Rock Beat Scissor",rps('p','s'),"Scissors beats paper. Player 2 wins."));

console.log(test("Test:Does Rock equal rock",rps('s','r'), "Rock beats scissors, Player 2 wins."));
console.log(test("Test:Does Rock beat scissor",rps('s','s'),tie));
console.log(test("Test:Does Rock Beat Scissor",rps('s','p'),"Scissors beats paper. Player 1 wins."));