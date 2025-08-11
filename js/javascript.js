console.log("Welcome to rock paper scissors game!");

// map containing the three possible choice in rock-paper-scissor game
const gameChoice = new Map();
gameChoice[1]="rock";
gameChoice[2]="paper";
gameChoice[3]="scissors";

// Generate a random number between (1-3)
// then return 1:rock, 2:paper, 3:scissors
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)+1;
    console.log(randomNumber);
    return randomNumber;
}

// Ask the user a number between (1-3)
// while the answer is not correct ask again
// return the choice
function getHumanChoice(){
    
    let exitWhile = 1;
    let humanChoice = parseInt(prompt("Make your choice:\n1. Rock\n2. Paper\n 3. Scissors"));

    while( exitWhile++ < 50 && (!(typeof humanChoice === "number") || humanChoice < 1 || humanChoice > 3)){
        humanChoice = parseInt(prompt("Enter a number between 1 and 3:\n1. Rock\n2. Paper\n 3. Scissors"));
    }
    
    return humanChoice;
}

console.log("Computer Choice :" + gameChoice[getComputerChoice()]);
console.log("Human Choice :" +  gameChoice[getHumanChoice()]);