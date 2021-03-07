let playerSelection;
let computerSelection;
let roundResult;
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let gameRound = 0;


const toggleAboutInfoButton = document.getElementById('about');
const aboutInfoContainer = document.getElementById('aboutinfo');

toggleAboutInfoButton.addEventListener("click", () => {
  aboutInfoContainer.classList.toggle("show");
})


playerSelection = document.querySelectorAll('.player-plays');
  
  playerSelection.forEach((button) => {
  
    button.addEventListener('click', () => {
      playerSelection = button.id;

      document.getElementById('player-play').innerHTML = `You played ${playerSelection}!`;
      console.log(`You played ${playerSelection}!`);
        
      game()

    });
  });

const resetGame = document.querySelector('#reset-game');

  resetGame.addEventListener('click', () => {
    if (confirm("Reset the game?")) {
      alert("You have left the game; ggnore");
      location.reload();
      console.log("You have left the game; ggnore"); 
    } else {
      console.log("The game continues")
    }
  });

function computerPlay() {
  let plays = ['rock', 'paper', 'scissors'];
  let computerSelection = plays[Math.floor(Math.random() * plays.length)];

  document.getElementById('computer-play').innerHTML = `Computer played ${computerSelection}!`;
  console.log(`The Computer played ${computerSelection}!`)

  return computerSelection;
}

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection;
  computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    console.log(`Draw!`)
    return roundResult = 'DRAW';
  } else {
    switch (playerSelection) {
      case 'rock':
        if (computerSelection === 'paper') {
          console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
          return roundResult = 'LOSS';
        } else {
          console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
          return roundResult = 'WON'
        }
      case 'paper':
        if (computerSelection === 'scissors') {
          console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
          return roundResult = 'LOSS';
        } else {
          console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
          return roundResult = 'WON'
        }
      case 'scissors':
        if (computerSelection === 'rock') {
          console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
          return roundResult = 'LOSS';
        } else {
          console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
          return roundResult = 'WON';
        }
    }
  }
}

function game(){
  gameRound++;

  switch(playRound(playerSelection,computerSelection)) {
    case (roundResult = 'WON'):
      playerScore++;
      console.log(`Round ${gameRound} Won!, Player Score: ${playerScore}, Computer Score: ${computerScore}`)
      break;
    case (roundResult = 'LOSS'):
      computerScore++;
      console.log(`Round ${gameRound} Loss!, Player Score: ${playerScore}, Computer Score: ${computerScore}`)
      break;
    case (roundResult = 'DRAW'):
      drawScore++;
      console.log(`Round ${gameRound} Draw!, Player Score: ${playerScore}, Computer Score: ${computerScore}`)
      break;
  }

  checkForWinner();

  document.getElementById('round-number').innerHTML = `ROUND ${gameRound}`;
  document.getElementById('round-result').innerHTML = `Round ${gameRound} ${roundResult.slice(0, 1 )+ roundResult.substring(1).toLowerCase()}!, Player Points: ${playerScore}, Computer Points: ${computerScore}`;
}

function checkForWinner() {
  const rpsButtons = document.getElementsByClassName('player-plays');

    if (playerScore === 5 || computerScore === 5) {
      for(i = 0; i < rpsButtons.length; i++){

        rpsButtons[i].disabled = true;
      }

      resetGame.style.display = "none";

      const rpsButtonsContainer = document.querySelector('#refresh-about-buttons'); 
      const playAgain = document.createElement("BUTTON");
      playAgain.innerHTML = `PLAY AGAIN`;
      rpsButtonsContainer.appendChild(playAgain);

      playAgain.addEventListener('click', () => {
        alert("Thanks for playing!\nThis page will now refresh.");
        location.reload();
      })
    }

    if (playerScore === 5) {
      document.getElementById('game-result').innerHTML = `Game Won! Total Rounds Played: ${gameRound}, Rounds Draw: ${drawScore}`;
      console.log (`Game Won! Total Rounds Played: ${gameRound}, Rounds Draw: ${drawScore}`)

    } else if (computerScore === 5) {
      document.getElementById('game-result').innerHTML = `Game Loss! Total Rounds Played: ${gameRound}, Rounds Draw: ${drawScore}`
      console.log (`Game Loss! Total Rounds Played: ${gameRound}, Rounds Draw: ${drawScore}`)
  }
}




  //const scoreBoard = document.querySelector("#scoreboard");
//
  //  const finalScore = document.createElement('div');
  //  finalScore.classList.add('scoreboard');
  //  finalScore.textContent = 'yoyoyo';
  //
  //  scoreBoard.appendChild(finalScore);
