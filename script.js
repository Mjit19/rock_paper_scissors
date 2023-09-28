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
