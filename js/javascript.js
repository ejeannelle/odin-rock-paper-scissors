// boolean to see message in console when debugging
const isDebug = false;

// map containing the three possible choice in rock-paper-scissor game
const gameChoice = new Map();
gameChoice[1]="rock";
gameChoice[2]="paper";
gameChoice[3]="scissors";


// Generate a random number between (1-3)
// then return 1:rock, 2:paper, 3:scissors
function getComputerChoice(){
    return Math.floor(Math.random()*3)+1;
}

function displayAlert(message)
{
    if(isDebug)
        console.log(message);
    else
        alert(message);
}

function getPrompt()
{
    if(isDebug)
    {
        const randomAnswers = [
            "1","2","3","4","5","6","99",
            "rock", "paper", "scissors", 
            "Rock","Paper", "Scissors",
            "ROCK", "PAPER", "SCISSORS",
            "rck", "pper", "sci",
            "BANANA", "Nan", "fasdfiufnosu fnue funsae ufnfaufn", " ", ""];
        
        const answer = randomAnswers[Math.floor(Math.random() * randomAnswers.length)];
        console.log("Human random answer: " + answer);

        return answer;
    }

    return prompt("Make your choice:\n1. Rock\n2. Paper\n3. Scissors");
}

// Ask the user a number between (1-3) or a string
// while the answer is not correct ask again
// return the choice
function getHumanChoice(){
    
    let exitWhile = 1;
    while( exitWhile++ < 50)
    {
        let humanAnswer = getPrompt(true);
        
        let humanAnswerValid = getValidHumanChoice(humanAnswer);
        if(Number.isInteger(humanAnswerValid))
            return humanAnswerValid

        displayAlert("Invalid input! Please enter 1, 2, 3 or the name (rock, paper, scissors)");
    }

    displayAlert("Too many invalid attempts. Game aborted");
    return null;
}

//Get the result or null if the answer is not valid
function getValidHumanChoice(humanAnswer){
    
    if(!humanAnswer)
        return null;

    let humanChoice = parseInt(humanAnswer);

   // If input is not a number, try to match it with a string value in gameChoice
    if(isNaN(humanChoice)){
        const humanAnsLower = humanAnswer.trim().toLowerCase();
        const matchKey = Object.keys(gameChoice).find(key => gameChoice[key] == humanAnsLower);

        humanChoice = parseInt(matchKey);
    }

    // Validate that the choice is within the allowed rang
    if(Number.isInteger(humanChoice) && humanChoice >= 1 && humanChoice <= 3)
        return humanChoice;

    return null;
}

function isHumanWinner(humanChoice, computerChoice){
    return  (humanChoice == 1 && computerChoice == 3) || //rock beats scissors
            (humanChoice == 2 && computerChoice == 1) || //paper beats rock
            (humanChoice == 3 && computerChoice == 2);   //scissors beat paper   
}   

// Get the human and Computer choice
// Check result
// Display the winner
// Increment Scores
function playRound(humanChoice, computerChoice, gameScores)
{
    let message = "Rock, paper, scissors, shoot!";

    const getBeat = choice => (choice == 3 ? "beat" : "beats"); //scissors beat 

    if(humanChoice == computerChoice)
    {
        message += `\nIt's a tie!`;
    }
    else if(isHumanWinner(humanChoice, computerChoice))
    {
        message += `\nYou won! ${gameChoice[humanChoice]} ${getBeat(humanChoice)} ${gameChoice[computerChoice]}`;
        gameScores.humanScore++;
    }
    else{

        message += `\nYou lost! ${gameChoice[computerChoice]} ${getBeat(computerChoice)} ${gameChoice[humanChoice]}`;
        gameScores.computerScore++;
    }

    message += `\nCurrent score: ${gameScores.humanScore} - ${gameScores.computerScore}`;
    displayAlert(message);
}

function displayFinalResult(gameScores) {
    let message;
    
    const diplayedScores = `${gameScores.humanScore} - ${gameScores.computerScore}`;

    if (gameScores.humanScore === gameScores.computerScore) {
        message = `It's a tie! Final score: ${diplayedScores}`;
    } else if (gameScores > gameScores) {
        message = `Congratulations, you won! Final score: ${diplayedScores}`;
    } else {
        message = `Too bad, you lost. Final score: ${diplayedScores}`;
    }

    displayAlert(message);
}

function playGame()
{
    const roundNumber = 5;

    //object containing the scores
    const gameScores = {
        computerScore : 0,
        humanScore : 0
    };

    displayAlert("Welcome to rock paper scissors game!");

    for(let i=1; i<=roundNumber; i++)
    {
        console.log(`Round #${i}`);

        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        
        if(!humanChoice || !computerChoice)
            break;

        playRound(humanChoice,computerChoice, gameScores);
    }

    displayFinalResult(gameScores);
}

//main 
playGame();