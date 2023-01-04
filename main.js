function getComputerChoice() {
    // 0 - rock, 1 - paper, 2 - scissors
    let choiceNumber = Math.floor(Math.random() * 3);

    if (choiceNumber === 0) {
        return "rock";
    } else if (choiceNumber === 1) {
        return "paper";
    } else if (choiceNumber === 2) {
        return "scissors";
    }
}

function createResultMessage(result, playerSelection, computerSelection) {
    if (result === "won") {
        return `You win! (${playerSelection} beats ${computerSelection})`;
    } else if (result === "lost") {
        return `You lose! (${computerSelection} beats ${playerSelection})`;
    } else {
        return "It's a tie!";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // make case-insensitive

    if (playerSelection === computerSelection) {
        return "tie"
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "won"
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        return "lost"
    }
}