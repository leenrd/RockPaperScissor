function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

let win = 0;

function round(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        win++;
        return 'You win! rock beats scissors';
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        win++;
        return 'You win! paper beats rock anytime gg'; 
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        win++;
        return 'GG EZ! scissors beats paper easy.';
    }
    else if(playerSelection === computerSelection){
        return 'Aw! shucs, its a TIE!';
    }
    else{
        return 'You Lose! What a Loser';
    }
}

function game(){
    for(let i=0; i<5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Enter rock, paper, scissor: ");
        let score = round(playerSelection, computerSelection);
        console.log(score);
    }
    if (win === 3){
        console.log(`Congrats! You win ${win} times!`);
    }
    else{
        console.log(`You lost! You won ${win} times, so bad man.`);
    }
}

game();




