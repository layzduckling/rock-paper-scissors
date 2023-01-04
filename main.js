function getComputerChoice() {
    // 0 - rock, 1 - paper, 2 - scissors
    let choiceNumber = Math.floor(Math.random() * 3);

    if (choiceNumber === 0) {
        return "rock";
    } else if (choiceNumber === 1) {
        return "paper";
    } else if (choiceNumber === 2) {
        return "scissors";
    } else {
        return null;
    }
}