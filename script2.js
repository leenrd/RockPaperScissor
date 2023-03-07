/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
choices = ['rock', 'paper', 'scissors']
function getComputerChoice(choices) {
  const random = Math.floor(Math.random() * choices.length)
  return choices[random]
}  

console.log(getComputerChoice(choices))

function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score = 0
  if (playerChoice === computerChoice) {
    return score = 0
  }
  
  if (playerChoice === 'rock' && computerChoice === 'scissors') {
    return score++
  } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
    return score--
  }
  
  if (playerChoice === 'paper' && computerChoice ==='scissors') {
    return score--
  } else if (computerChoice === 'paper' && playerChoice ==='scissors') {
    return score++
  }

  if (playerChoice === 'paper' && computerChoice ==='rock') {
    return score++
  } else if (computerChoice === 'paper' && playerChoice ==='rock') {
    return score--
  }
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  
}

playGame()