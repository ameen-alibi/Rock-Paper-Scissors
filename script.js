

function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    let index = Math.floor(Math.random()*choices.length);
    return choices[index];
}


function playOneRound(playerSelection,computerSelection){
    let playerselection = playerSelection.toLowerCase();
    let computerselection = computerSelection.toLowerCase();
    if (playerselection===computerSelection){
        return 'Tie'
    }
    else if (playerselection==='rock'){
        if (computerselection === 'paper'){
            return false;
        }
        else{
            return true;
        }
    }
    else if (playerselection==='paper'){
        if (computerselection ==='scissors'){
            return false;
        }
        else{
            return true;
        }
    }
    else {
        if (computerselection==='paper'){
            return true;
        }
        else {
            return false;
        }
    }
}

function game(){
    var playerScore = 0;
    var computerScore = 0;
    for (let i=0;i<5;i++){
        let playerSelection = prompt('Player Selection :');
        let computerSelection = getComputerChoice();
        let result = playOneRound(playerSelection,computerSelection);
        result ? (playerScore++,console.log('Nice!')) : (computerScore++,console.log('Unlucky')) ;
    }
    console.log(playerScore);
    console.log(computerScore);
}


game()