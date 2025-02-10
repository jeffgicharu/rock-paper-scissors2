let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".choices button");
const roundResult = document.querySelector("#roundResult");
const scoreBoard = document.querySelector("#score");

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        roundResult.textContent = `It's a tie! You both chose ${humanChoice}`;
        return;
    }

    const winningConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    if (winningConditions[humanChoice] === computerChoice) {
        humanScore++;
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    scoreBoard.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

    checkGameEnd();
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Test it
console.log(getComputerChoice()); // Should print rock, paper, or scissors randomly


function checkGameEnd() {
    if (humanScore === 5) {
        alert("Congratulations! You won the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Sorry, you lost the game!");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundResult.textContent = "";
    scoreBoard.textContent = "Player: 0 | Computer: 0";
}

buttons.forEach(button => {
    button.addEventListener("click", () => playRound(button.id));
});
