// labels
const playerChoicelb = document.getElementById('player-choice')
const botChoicelb = document.getElementById('bot-choice')
const resultlb = document.getElementById('result')

//bot 
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const random = Math.floor(Math.random() * choices.length)
  return choices[random]
}  

//win/lose
function getResult(playerChoice, computerChoice){

  if (playerChoice === computerChoice) {
    return 0
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    return 1
  } else {
    return -1
  }
  
}

//show the player
function showResult(result, playerChoice, computerChoice, res) {
  
  if (result == -1) {
    res.innerText = 'You Lose!'
  } else if (result == 0) {
    res.innerText = 'It\'s a Draw!'
  } else if (result == 1) {
    res.innerText = 'You Win!'
  }

  playerChoicelb.innerText = `You chose ${playerChoice}`
  botChoicelb.innerText = `Bot chose ${computerChoice}`
}


//waht happens onclick
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const result = getResult(playerChoice, computerChoice)
  showResult(result, playerChoice, computerChoice, resultlb)
}


//always on
function playGame() {
  const play = document.querySelectorAll('.rpsButton')

  play.forEach(button => {
    button.onclick = () => onClickRPS(button.value)

  })

  // Add a click listener to the end game button that runs the endGame() function on click
  const clearBtn = document.getElementById('clear')
  clearBtn.onclick = () => endGame()
}




// clear
function endGame() {
  playerChoicelb.innerText = ' '
  botChoicelb.innerText = ' '
  resultlb.innerText = ' '
}

playGame()