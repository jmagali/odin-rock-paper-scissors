// Global variables
let playerScore = 0;
let enemyScore = 0;
let winner = "";
let roundCount = 0;

function getEnemyChoice() {
    // Assigns a random value from 0 - 2
    let index = Math.floor(Math.random() * 3);
    let choice = ["rock", "paper", "scissors"];

    return choice[index];
}

function playRound(playerChoice, enemyChoice) {
    // Losing cases
    if (
        (playerChoice === "rock" && enemyChoice === "paper")
        || (playerChoice === "paper" && enemyChoice === "scissors")
        || (playerChoice === "scissors" && enemyChoice === "rock")
    ) {
        enemyScore++;
        winner = "Enemy";
    }
    // Tie case
    else if (playerChoice === enemyChoice) {
    }
    // Winning cases
    else {
        playerScore++;
        winner = "Player"
    }

    roundCount++;
}

const roundCounter = document.getElementById("round-counter");
const scoreMsg = document.getElementById("score-msg");
const enemySign = document.getElementById("enemy-choice");
const score = document.getElementById("score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const restart = document.getElementById("restart");
