// Global variables
let playerScore = 0;
let enemyScore = 0;
let winner = "";
let roundCount = 0;

const roundCounter = document.getElementById("round-counter");
const scoreMsg = document.getElementById("score-msg");
const enemySign = document.getElementById("enemy-choice");
const score = document.getElementById("score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const gameOverText = document.getElementById("game-over-text");
const restart = document.getElementById("restart");

rock.addEventListener("click", function() {onClick("rock");});
paper.addEventListener("click", function() {onClick("paper");});
scissors.addEventListener("click", function() {onClick("scissors");});
restart.addEventListener("click", function () {window.location.reload();})

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

function onClick (choice) {
    if (!checkGameOver()) {
        const enemyChoice = getEnemyChoice();
        playRound(choice, enemyChoice);
        updateEnemyChoices(enemyChoice)
        updateRoundCount(roundCount);
        updateScore(playerScore, enemyScore);
        updateScoreMessage (winner, choice, enemyChoice);

        if (checkGameOver()) {
            setGameOverMessage(playerScore, enemyScore);
            restart.style.visibility = "visible";
        }
    }
}

function updateEnemyChoices (enemyChoice) {
    switch (enemyChoice) {
        case "rock":
            enemySign.textContent = "🪨";
            break;
        case "paper":
            enemySign.textContent = "📃";
            break;
        default:
            enemySign.textContent = "✂️";
    }
}

function capitalizeFirstCharacter (text) {
    return text[0].toUpperCase() + text.slice(1, text.length);
}

function updateScoreMessage (winner, playerChoice, enemyChoice) {
    switch (winner) {
        case "tie":
            scoreMsg.textContent = `It is a tie! You both chose ${playerChoice}!`;
            scoreMsg.style.color = "#414a4c";
            break;
        case "Player":
            scoreMsg.textContent = `You won! ${capitalizeFirstCharacter(playerChoice)} beats ${enemyChoice}!`;
            scoreMsg.style.color = "#2E8B8B";
            break;
        default:
            scoreMsg.textContent = `You lose! ${capitalizeFirstCharacter(playerChoice)} loses to ${enemyChoice}!`;
            scoreMsg.style.color = "#FF6F61";
    }       
}

function updateScore (playerScore, enemyScore) {
    score.textContent = `Player: ${playerScore} | Enemy: ${enemyScore}`;
}

function updateRoundCount (roundCount) {
    roundCounter.textContent = `Round: ${roundCount}`;
}

function setGameOverMessage (playerScore, enemyScore) {
    if (playerScore > enemyScore) {
        gameOverText.textContent = "You Win!";
        gameOverText.style.color = "#2E8B8B";
    }
    else if (playerScore === enemyScore) {
        gameOverText.textContent = "Tie!";
    }
    else {
        gameOverText.textContent = "You Lose!";
        gameOverText.style.color = "#FF6F61";
    }
}

function checkGameOver () {
    if (playerScore === 5 || enemyScore === 5) {
        return true;
    }

    return false;
}