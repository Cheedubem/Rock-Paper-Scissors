// function to get the computer choice
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const optionsRandom = Math.floor(Math.random() * options.length);
  return options[optionsRandom];
}

// function to get the player choice
function getPlayerChoice() {
  const userInput = prompt("Choose one: rock, paper, scissors");
  return userInput;
}

// storing both functions in variables
const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

// game function
function playGame(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("Its a tie!");
  }
  elseif(
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
    ) {
    console.log('You Win!');
    };
    else{
        console.log('You Lose!');
    }
    
}
