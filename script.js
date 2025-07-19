function getComputerChoice() {
    // Assigns a random value from 0 - 2
    let index = Math.floor(Math.random() * 3);
    let choice;
    
    // Assigns a choice based on the random index
    switch (index) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        default:
            choice = "scissors";
            break;
    }

    return choice;
}
