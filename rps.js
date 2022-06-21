const choices = ['Rock', 'Paper', 'Scissors'];

// Image Containers
const playerImgContainer = document.querySelector("#player-img");
const cpuImgContainer = document.querySelector("#cpu-img");

// Score Displays
const playerScore = document.querySelector("#player-score");
const cpuScore = document.querySelector("#cpu-score");

// Game and Match Results Display
const resultsDisplay = document.querySelector("#results-container").firstElementChild;

// Buttons for Choices
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

// Counters
let playerWins = 0;
let cpuWins = 0;
let round = 0;

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
function cpuPlay(){
    //return a number between 0 and 2 (inclusive)
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection){
    let cpuSelection = cpuPlay();

    if(playerSelection == 'Rock'){
        if(cpuSelection == 'Rock') resultsDisplay.innerText = "Tie!";
        else if(cpuSelection == 'Scissors') {
            resultsDisplay.innerText = "Rock beats Scissors. You +1";
            playerWins++;
            playerScore.innerText = `You: ${playerWins}`;
        }
        else if(cpuSelection == 'Paper') {
            resultsDisplay.innerText = "Paper beats Rock. CPU +1";
            cpuWins++;
            cpuScore.innerText = `CPU: ${cpuWins}`;
        }
    } else if(playerSelection == 'Paper'){
        if(cpuSelection == 'Paper') resultsDisplay.innerText = "Tie!";
        else if(cpuSelection == 'Rock') {
            resultsDisplay.innerText = "Paper beats Rock. You +1";
            playerWins++;
            playerScore.innerText = `You: ${playerWins}`;
        }       
        else if(cpuSelection == 'Scissors') {
            resultsDisplay.innerText = "Scissors beats Paper. CPU +1";
            cpuWins++;
            cpuScore.innerText = `CPU: ${cpuWins}`;
        }
    } else if(playerSelection = 'Scissors'){
        if(cpuSelection == 'Scissors') resultsDisplay.innerText = "Tie!";
        else if(cpuSelection == 'Paper') {
            resultsDisplay.innerText = "Scissors beats Paper. You +1";
            playerWins++;
            playerScore.innerText = `You: ${playerWins}`;
        }
        else if(cpuSelection == 'Rock') {
            resultsDisplay.innerText = "Rock beats Scissors. CPU +1";
            cpuWins++;
            cpuScore.innerText = `CPU: ${cpuWins}`;
        }
    }

    //Change Image
    changeImage(playerSelection, cpuSelection);
    round++;
}

function changeImage(playerSelection, cpuSelection){

    // Add corresponding images
    if(playerSelection == "Rock") playerImgContainer.src = "./images/stone.png";
    else if(playerSelection == "Paper") playerImgContainer.src = "./images/paper.png";
    else if(playerSelection == "Scissors") playerImgContainer.src = "./images/scissors.png";

    if(cpuSelection == "Rock") cpuImgContainer.src = "./images/stone.png";
    else if(cpuSelection == "Paper") cpuImgContainer.src = "./images/paper.png";
    else if(cpuSelection == "Scissors") cpuImgContainer.src = "./images/scissors.png";
}

function determineWinner(playerWins, cpuWins) {
    if(playerWins > cpuWins) return "Player wins the game!";
    else if(cpuWins > playerWins) return "cpu wins the game!";
    else return "Game ends in a Tie!";
}

function game(){

    // Count each player's wins
    let playerWins = 0;
    let cpuWins = 0;

    for(let i = 1; i <= 5; i++){
        console.log(`Round ${i}`); // Display round number
        let input = prompt("Enter a choice: ");
        let result = playRound(input, cpuPlay());
        
        console.log(result[0]); //Display the result

        // Determine the round winner
        if(result[1] == 1) playerWins++;
        else if(result[1] == -1) cpuWins++;
        else continue;
    }

    // Determine the game winner
    console.log("***Game Results***")
    console.log(determineWinner(playerWins, cpuWins));
}


