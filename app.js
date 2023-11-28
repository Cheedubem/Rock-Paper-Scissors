function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const optionsRandom = Math.floor(Math.random() * options.length);
  return options[optionsRandom];
}

//Passing The fucntion into an array
const computerChoice = getComputerChoice();

console.log(computerChoice);
