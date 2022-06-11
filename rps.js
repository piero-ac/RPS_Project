const choices = ['Rock', 'Paper', 'Scissors'];

// Image Containers
const playerImgContainer = document.querySelector("#player-img-container");
const cpuImgContainer = document.querySelector("#cpu-img-container");

// Score Displays
const playerScore = document.querySelector("#player-score");
const cpuScore = document.querySelector("#cpu-score");

// Game and Match Results Display
const resultsDisplay = document.querySelector("#results-container").firstChild();

// Buttons for Choices
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

// function return a choice between rock, paper, or scissors
function computerPlay(){
    //return a number between 0 and 2 (inclusive)
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    // 0 : tie, 1 : player wins, -1 : computer wins
    if(playerSelection == 'rock'){
        if(computerSelection == 'Rock') return ["Tie!", 0];
        else if(computerSelection == 'Scissors') return ["You Win! Rock beats Scissors", 1];
        else if(computerSelection == 'Paper') return ["You Lose! Paper beats Rock", -1];
    } else if(playerSelection == 'paper'){
        if(computerSelection == 'Paper') return ["Tie!", 0];
        else if(computerSelection == 'Rock') return ["You Win! Paper beats Rock", 1];
        else if(computerSelection == 'Scissors') return ["You Lose! Scissors beats Paper", -1];
    } else if(playerSelection = 'scissors'){
        if(computerSelection == 'Scissors') return ["Tie!", 0];
        else if(computerSelection == 'Paper') return ["You Win! Scissors beats Paper", 1];
        else if(computerSelection == 'Rock') return ["You Lose! Rock beats Scissors", -1];
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


