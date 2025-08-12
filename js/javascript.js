console.log("Welcome to rock paper scissors game!");

let computerScore = 0;
let humanScore = 0;
let roundCounter = 1;

// map containing the three possible choice in rock-paper-scissor game
const gameChoice = new Map();
gameChoice[1]="rock";
gameChoice[2]="paper";
gameChoice[3]="scissors";

// Generate a random number between (1-3)
// then return 1:rock, 2:paper, 3:scissors
function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1;
    console.log(randomNumber);
    return randomNumber;
}

// Ask the user a number between (1-3) or a string
// while the answer is not correct ask again
// return the choice
function getHumanChoice(){
    
    let exitWhile = 1;
    while( exitWhile++ < 50)
    {
        let humanAnswer = prompt("Make your choice:\n1. Rock\n2. Paper\n 3. Scissors");
        
        if(humanAnswer){

            //Check if human enter number
            let humanChoice = parseInt(humanAnswer);
            if(!humanChoice)
            {
                const humanAnsLower = humanAnswer.toLowerCase();
                humanChoice = parseInt(Object.keys(gameChoice).find(key => gameChoice[key] == humanAnsLower));
            }

            //Check if Choice is between 1 and 3
            if(humanChoice && humanChoice >= 1 && humanChoice <= 3)
            {
                return humanChoice;
            }
        }

        alert("Incorrect answer! Tap a number between 1 and 3 or the item's name");
    }
}

function isHumanWinner(humanChoice, computerChoice){
    return  (humanChoice == 1 && computerChoice == 3) ||
            (humanChoice == 2 && computerChoice == 1) ||
            (humanChoice == 3 && computerChoice == 2);
}   

// Get the human and Computer choice
// Check result
// Display the winner
// Increment Scores
function playRound(humanChoice, computerChoice){
    console.log(`Round #${roundCounter}`);
    console.log("rock, paper, scissors, shoot!");

    if(isHumanWinner(humanChoice, computerChoice))
    {
        console.log(`You win! ${gameChoice[humanChoice]} beats ${gameChoice[computerChoice]}`);
        humanScore++;
    }
    else{
        console.log(`You loose! ${gameChoice[computerChoice]} beats ${gameChoice[humanChoice]}`);
        computerScore++;
    }

    roundCounter++;   
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice,computerChoice);
