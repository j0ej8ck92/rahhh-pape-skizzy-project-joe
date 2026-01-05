const choices = ["rock", "paper","scissors"];
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerOptions = [rock, paper, scissors];

const fireOff = (event) => {

  const playerChoice = event.target.className;
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  playRound(playerChoice, computerChoice); //Arguments going into playRound function
  gameOver();
}
    
playerOptions.forEach(option => {

      option.addEventListener("click", fireOff) 
  }
);
  
let playerScore = 1;
let computerScore = 1;

const playRound = (player,computer) => { //Parameters going into playRound function

  let playerScoreNumber = document.querySelector(".p-score");
  let computerScoreNumber = document.querySelector(".c-score");
  const result = document.querySelector(".result");
        
  if (player === computer) {

    result.textContent = "Draw! It's a Tie!";
  }

  else if ( (player === "rock" && computer === "scissors") ||
            (player === "scissors" && computer === "paper") ||
            (player === "paper" && computer === "rock") ) {

    playerScoreNumber.textContent = playerScore++;
    result.textContent = `Player Wins! ${player} beats ${computer}!`;

  }

  else  {

    computerScoreNumber.textContent = computerScore++;
    result.textContent = `Computer Wins! ${computer} beats ${player}!`;
  }
}

function gameOver(){
  
  const gameResult = document.querySelector(".game-over");
  if((playerScore === 6 ) || (computerScore === 6)) {
    gameResult.textContent = "GAME OVER!";
  }

  else {
    restartGame();
  }
}

const restartGame = () => {

  const restartBtn = document.getElementById("restart-btn"); 
  restartBtn.textContent = "Restart";
  restartBtn.addEventListener("click", () => {
    window.location.reload();
  })
}














    



















