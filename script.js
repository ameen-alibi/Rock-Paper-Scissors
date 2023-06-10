
//Get the necessary DOM elements
const rockButton = document.querySelector(".player-choice-rock");
const paperButton = document.querySelector(".player-choice-paper");
const scissorsButton = document.querySelector(".player-choice-scissors");
const result = document.getElementById('result');

//Add event listeners to player's choices buttons
rockButton.addEventListener('click', () => playOneRound('rock'));
paperButton.addEventListener('click', () => playOneRound('paper'));
scissorsButton.addEventListener('click', () => playOneRound('scissors'));

//Setting initial scores
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    let index = Math.floor(Math.random()*choices.length);
    let computer_choice=choices[index];

    //TODO Style the computer choice
    // let computerSelectionClassName = `computer-choice-${computer_choice}`;
    // let computerSelectedChoice = document.getElementById(computerSelectionClassName);
    // computerSelectedChoice.classList.add('selected');
    
    return computer_choice;
}    


function playOneRound(player_selection){
    // Generate a random choice for the computer
    let computer_choice = getComputerChoice().toLowerCase();
    // Determine the winner
    if (player_selection===computer_choice){
        alert('Tie!');
    }    
    else if 
        (
            (player_selection==='rock' && computer_choice === 'scissors') ||
            (player_selection === 'paper' && computer_choice === 'rock') ||
            (player_selection === 'scissors' && computer_choice === 'paper')
        )
        {
            playerScore++;
        }    
        else{
            computerScore++;
        }    
        if (playerScore==5 || computerScore==5){
            announceWinner();
            playerScore=0;
            computerScore=0;
        }
        result.textContent = `${playerScore}-${computerScore}`;
    }    


function announceWinner(){
    playerScore>computerScore?alert('You Won!'):alert('Try Again?');
}