const buttons = document.querySelectorAll('#container button');
const resultDiv = document.createElement('div');
const roundResult = document.createElement('div')
const score = document.createElement('div')

let computerScore = 0, playerScore = 0;

resultDiv.classList.add('result');
score.classList.add('score');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let target = event.target;
    
        roundResult.textContent = playRound(target.id, getComputerChoice());
    
        if (roundResult.textContent.charAt(4) === "L") {
            computerScore++;
        } else if (roundResult.textContent.charAt(4) === "W") {
            playerScore++;
        }

        if (computerScore === 5 || playerScore === 5) {
            alert(gameResult(playerScore, computerScore));
    
            playerScore = 0, computerScore = 0;
        }
    
        score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    
        document.body.appendChild(resultDiv);
        resultDiv.appendChild(roundResult);
        resultDiv.appendChild(score);
    });
});



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


// Asks for user input and return user input
function playerSelection() {
    let pick = prompt("Choose between Rock/Paper/Scissors").toLowerCase();

    // Checks if input is one of the 3 options
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
function gameResult(playerScore, computerScore) {
    let gameResult = "";
    if (playerScore > computerScore) {
        gameResult = "You Won the game!!!!"
    } else if (playerScore < computerScore) {
        gameResult = "Computer Won the game!!!!"
    }

    return gameResult;
}




