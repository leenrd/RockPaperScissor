// buttons
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const clearBtn = document.getElementById('clear')

// labels
const playerChoicelb = document.getElementById('player-choice')
const botChoicelb = document.getElementById('bot-choice')
const result = document.getElementById('result')

//events
clearBtn.onclick = () => console.clear()

let choices = ['rock', 'paper', 'scissors']

rockBtn.onclick = () => {
    playerChoice = 'rock'
    console.log('rock')
    playRound(playerChoice, botChoice(choices))
}
paperBtn.onclick = () => {
    playerChoice ='paper'
    console.log('paper')
    playRound(playerChoice, botChoice(choices))
}
scissorsBtn.onclick = () => {
    playerChoice = 'scissors'
    console.log('scissors')
    playRound(playerChoice, botChoice(choices))
}

// functions
const botChoice = (choices) => {
    const random = Math.floor(Math.random() * choices.length)
    return choices[random]
}

const playRound = (playerChoice, botChoice) => {
    if (playerChoice == botChoice) {
        result.innerText = 'It\'s a tie!'
    } else if (playerChoice == 'rock') {
        if (botChoice == 'paper') {
            result.innerText = 'You win!'
        } else {
            result.innerText = 'Bot wins!'
        }
    } else if (playerChoice == 'paper') {
        if (botChoice =='scissors') {
            result.innerText = 'You win!'
        } else {
            result.innerText = 'Bot wins!'
        }
    } else if (playerChoice =='scissors') {
        if (botChoice == 'rock') {
            result.innerText = 'You win!'
        } else {
            result.innerText = 'Bot wins!'
        }
    }
}


// playerChoicelb.innerText = `You chose ${.innerText}`
// botChoicelb.innerText = `Bot chose ${bot.innerText}`

