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

function playRound(humanChoice, computerChoice, scores) {
    // Losing cases
    if (
        (humanChoice.toLowerCase() === "rock" && computerChoice === "paper")
        || (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors")
        || (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock")
    ) {
        scores[0]++;
        alert("You lose! " + computerChoice[0].toUpperCase() + computerChoice.slice(1, computerChoice.length).toLowerCase() + " beats " + humanChoice[0].toUpperCase() + humanChoice.slice(1, humanChoice.length).toLowerCase());
    }
    // Tie case
    else if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        alert("Tie! You both chose " + computerChoice[0].toUpperCase() + computerChoice.slice(1, computerChoice.length).toLowerCase() + "!");
    }
    // Winning cases
    else {
        scores[1]++;
        alert("You win! " + humanChoice[0].toUpperCase() + humanChoice.slice(1, humanChoice.length).toLowerCase() + " beats " + computerChoice[0].toUpperCase() + computerChoice.slice(1, computerChoice.length).toLowerCase());
    }

    return scores;
}

function playGame() {
    let scores = [0, 0];

    // To play five rounds
    for (let i = 0; i < 5; i++) {
        // To get the choices of the computer and user
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection, scores);
    }

    if (scores[0] > scores[1]) {
        alert("The Computer Wins! Computer Score: " + scores[0] + "; Your Score: " + scores[1]);
    }
    else if (scores[0] === scores[1]) {
        alert("Tie! Computer Score: " + scores[0] + "; Your Score: " + scores[1])
    }
    else {
        alert("You Win! Computer Score: " + scores[0] + "; Your Score: " + scores[1]);   
    }
}

playGame();

