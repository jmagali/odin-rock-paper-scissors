// Global variable declaration
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    // Assigns a random value from 0 - 2
    let index = Math.floor(Math.random() * 3);
    let choice = ["rock", "paper", "scissors"];

    return choice[index];
}

function getHumanChoice() {
    let choice = prompt("Please enter your choice ('rock', 'paper', or 'scissors')")
    return choice;
}

function playRound(humanChoice, computerChoice) {
    // Losing cases
    if (
        (humanChoice.toLowerCase() === "rock" && computerChoice === "paper")
        || (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors")
        || (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        alert("You lose! " + computerChoice[0].toUpperCase() + computerChoice.slice(1, computerChoice.length).toLowerCase() + " beats " + humanChoice[0].toUpperCase() + humanChoice.slice(1, humanChoice.length).toLowerCase());
    }
    else {
        humanScore++;
        alert("You win! " + humanChoice[0].toUpperCase() + humanChoice.slice(1, humanChoice.length).toLowerCase() + " beats " + computerChoice[0].toUpperCase() + computerChoice.slice(1, computerChoice.length).toLowerCase());
    }
}

// To get the choices of the computer and user
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

