function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Test it
console.log(getComputerChoice()); // Should print rock, paper, or scissors randomly

function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice! Enter Rock, Paper, or Scissors:").toLowerCase();
    }
    return choice;
}

// Test it
console.log(getHumanChoice()); // Should get valid input

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    const winningConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    if (winningConditions[humanChoice] === computerChoice) {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}

// Test it
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(playRound(humanChoice, computerChoice));

let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }

  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry, you lost the game!");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();

