const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const clearBtn = document.getElementById('clear')

// rockBtn.onclick = () => console.log('rockBtn clicked')
// paperBtn.onclick = () => console.log('paperBtn clicked')
// scissorsBtn.onclick = () => console.log('scissorsBtn clicked')
clearBtn.onclick = () => console.clear()

const square = document.querySelectorAll('.square')

square.forEach(square => {
    square.onclick = () => console.log(square.value)
})


