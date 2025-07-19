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
