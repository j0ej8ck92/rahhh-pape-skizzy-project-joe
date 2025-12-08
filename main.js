const choices = ["Rock", "Paper","Scissors"];

function getCompChoice() {
  
  return choices[Math.floor(Math.random() * choices.length)];

}

function getPlayChoice() {
        
  let input = prompt("Rock, Paper, or Scissors");

  return input;

}

const humanChoice = getPlayChoice();
const computerChoice = getCompChoice();
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
        
  if (humanChoice === computerChoice) {

    return "Draw! It's a Tie!";
  }

  else if ( (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Scissors" && computerChoice === "Paper") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ) {

    humanScore++;

    return `Player Wins! ${humanChoice} beats ${computerChoice}!`;

  }

  else  {

    computerScore++;

    return `Computer Wins! ${humanChoice} beats ${computerChoice}!`;
          
  }

}

function playGame() {

  for(let i = 0; i <=4; i++) {

    console.log(playRound(getPlayChoice(), getCompChoice()));
    console.log(humanScore);
    console.log(computerScore);

  }

}

playGame();






