const choices = ['Rock', 'Paper', 'Scissors'];

// Image Containers
const playerImgContainer = document.querySelector("#player-img-container");
const cpuImgContainer = document.querySelector("#cpu-img-container");

// Score Displays
const playerScore = document.querySelector("#player-score");
const cpuScore = document.querySelector("#cpu-score");

// Game and Match Results Display
const resultsDisplay = document.querySelector("#results-container").firstChild;

// Buttons for Choices
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

// Counters
let playerWins = 0;
let computerWins = 0;

//Add event listeners for buttons
rockButton.addEventListener('click', function() {
    playRound(rockButton.value);
});
paperButton.addEventListener('click', function() {
    playRound(paperButton.value);
});
scissorsButton.addEventListener('click', function() {
   playRound(scissorsButton.value); 
});

// function return a choice between rock, paper, or scissors
function computerPlay(){
    //return a number between 0 and 2 (inclusive)
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection){
    let computerSelection = computerPlay();

    if(playerSelection == 'Rock'){
        if(computerSelection == 'Rock') resultsDisplay.innerText = "Tie!";
        else if(computerSelection == 'Scissors') {
            resultsDisplay.innerText = "Rock beats Scissors. You +1";
            playerWins++;
        }
        else if(computerSelection == 'Paper') {
            resultsDisplay.innerText = "Paper beats Rock. CPU +1";
            computerWins++;
        }
    } else if(playerSelection == 'Paper'){
        if(computerSelection == 'Paper') resultsDisplay.innerText = "Tie!";
        else if(computerSelection == 'Rock') {
            resultsDisplay.innerText = "Paper beats Rock. You +1";
            playerWins++;
        }       
        else if(computerSelection == 'Scissors') {
            resultsDisplay.innerText = "Scissors beats Paper. CPU +1";
            computerWins++;
        }
    } else if(playerSelection = 'Scissors'){
        if(computerSelection == 'Scissors') resultsDisplay.innerText = "Tie!";
        else if(computerSelection == 'Paper') {
            resultsDisplay.innerText = "Scissors beats Paper. You +1";
            playerWins++;
        }
        else if(computerSelection == 'Rock') {
            resultsDisplay.innerText = "Rock beats Scissors. CPU +1";
            computerWins++;
        }
    }
}

function determineWinner(playerWins, computerWins) {
    if(playerWins > computerWins) return "Player wins the game!";
    else if(computerWins > playerWins) return "Computer wins the game!";
    else return "Game ends in a Tie!";
}

function game(){

    // Count each player's wins
    let playerWins = 0;
    let computerWins = 0;

    for(let i = 1; i <= 5; i++){
        console.log(`Round ${i}`); // Display round number
        let input = prompt("Enter a choice: ");
        let result = playRound(input, computerPlay());
        
        console.log(result[0]); //Display the result

        // Determine the round winner
        if(result[1] == 1) playerWins++;
        else if(result[1] == -1) computerWins++;
        else continue;
    }

    // Determine the game winner
    console.log("***Game Results***")
    console.log(determineWinner(playerWins, computerWins));
}


