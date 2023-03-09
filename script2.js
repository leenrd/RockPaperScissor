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

//debug



function showResult(result, playerChoice, computerChoice, resultlb) {
  
  if (result == -1) {
    resultlb.innerText = 'You Lose!'
  } else if (result == 0) {
    resultlb.innerText = 'It\'s a Draw!'
  } else if (result == 1) {
    resultlb.innerText = 'You Win!'
  }

  playerChoicelb.innerText = `You chose ${playerChoice}`
  botChoicelb.innerText = `Bot chose ${computerChoice}`
}

let bot = getComputerChoice()

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  getResult(playerChoice, bot)
  showResult(res, playerChoice, bot, resultlb)
}



function playGame() {
  const play = document.querySelectorAll('.rpsButton')

  play.forEach(button => {
    button.onclick = () => onClickRPS(button.value, bot, getResult)
  })

  
  // Add a click listener to the end game button that runs the endGame() function on click
  const clearBtn = document.getElementById('clear')
  clearBtn.onclick = () => endGame()
}




// ** endGame function clears all the text on the DOM **
function endGame() {
  playerChoicelb.innerText = ' '
  botChoicelb.innerText = ' '
  resultlb.innerText = ' '
}

playGame()