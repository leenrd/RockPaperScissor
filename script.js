function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function round(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
        return 'You win! rock beats scissors';        
    }
    else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        return 'You win! paper beats rock anytime gg'; 
    }
    else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        return 'GG EZ! scissors beats paper easy.';
    }
    else if(playerSelection.toLowerCase() === computerSelection){
        return 'Aw! shucs, its a TIE!';
    }
    else{
        return 'You Lose!'
    }
}

