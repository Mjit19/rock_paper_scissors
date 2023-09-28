console.log(game());

// Computer chooses a random value between 0 - 2
function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    let result = "";

    // Gets a string based on the value and returns it
    if (value === 0) {
        result = "rock";
    } else if (value === 1) {
        result = "paper";
    } else {
        result = "scissors";
    }

    return result;
}


// Get and return user input
function playerSelection() {
    let pick = prompt("Choose between Rock/Paper/Scissors").toLowerCase();

    // Check if it's valid
    if (pick !== "rock" && pick !== "paper" && pick !== "scissors") {
        throw new Error("You failed to do a simple task, congratulations!");
    }

    return pick;
}

// Play a round, print round result
function playRound(playerSelection, computerSelection) {

    //   If the values match, draw and returns result at the end
    let result = "It's a draw!";

//   If the values don't match, decide who won and who lost
    if (playerSelection !== computerSelection){
        if (computerSelection === "rock") {
            if (playerSelection === "paper") {
                result = "You Win! Paper beats Rock"
            } else {
                result = "You Lose! Rock beats Scissors"
            }
        } else if (computerSelection === "paper") {
            if (playerSelection === "scissors") {
                result = "You Win! Scissors beats Paper"
            } else {
                result = "You Lose! Paper beats Rock"
            }
        } else {
            if (playerSelection === "rock") {
                result = "You Win! Rock beats Scissors"
            } else {
                result = "You Lose! Scissors beats Paper"
            }
        }
    }

    return result;
}
// play game, print game result at the end
function game() {
    let gameResult = "The game is a draw!"
    let playerScore = 0, computerScore = 0;
    let roundResult = "";
    
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        // Keep a tab on the score
        roundResult = playRound(playerSelection(), getComputerChoice());
        console.log(roundResult);
        if (roundResult.charAt(4) === "L") {
            computerScore++;
        } else if (roundResult.charAt(4) === "W") {
            playerScore++;
        }
    }

    // Decide the winner
    if (playerScore > computerScore) {
        gameResult = "You Won the game!!!!"
    } else if (playerScore < computerScore) {
        gameResult = "You Lost the game!!!!"
    }

    return gameResult;
}




