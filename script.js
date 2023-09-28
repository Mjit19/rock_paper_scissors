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
        return "You failed to do a simple task, congratulations!";
    }

    return pick;
}

