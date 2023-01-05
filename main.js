function getComputerSelection() {
  // 0 - rock, 1 - paper, 2 - scissors
  const choiceNumber = Math.floor(Math.random() * 3);

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
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "won";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "lost";
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt("Rock, paper or scissors?").toLowerCase(); // make case-insensitive
    const computerSelection = getComputerSelection();
    const results = playRound(playerSelection, computerSelection);

    if (results === "won") {
      playerScore++;
    } else if (results === "lost") {
      computerScore++;
    }

    console.log(
      `Round ${i}: ` +
        createResultMessage(results, playerSelection, computerSelection) +
        `\nYour Score: ${playerScore}, Computer Score: ${computerScore}`
    );
  }

  if (playerScore > computerScore) {
    console.log("You win!");
  } else if (playerScore < computerScore) {
    console.log("You lost...");
  } else {
    console.log("It's a tie.");
  }
}

game();
