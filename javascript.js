
function getComputerChoice() {
    let answer = Math.floor(Math.random() * 3);
    
    switch (answer) {
        case 0:
            return "rock"
            break;
        
        case 1:
            return "paper"
            break;

        case 2:
            return "scissor"
            break;

        default:
            return "ERROR"
            break;
    }
};

function playRound(playerSelection, computerSelection){

    // playerSelection = playerSelection.toLowerCase();
    console.log(`Player: ${playerSelection} || PC: ${computerSelection}`);

    switch (playerSelection.toLowerCase()) {
        case 'rock':
            if(computerSelection === 'rock'){
                return `It's a Draw! Computer also got ${computerSelection}`;
            }
            if(computerSelection === 'paper'){
                return `You Lose! Computer got ${computerSelection}, which beats Rock`;
            }
            if(computerSelection === 'scissor'){
                return `You Won! Computer got ${computerSelection}`;
            }
            break;
    
        case 'paper':
            if(computerSelection === 'rock'){
                return `You Won! Computer got ${computerSelection}`;
            }
            if(computerSelection === 'paper'){
                return `It's a Draw! Computer also got ${computerSelection}`;
            }
            if(computerSelection === 'scissor'){
                return `You Lose! Computer got ${computerSelection}, which beats Paper`;
            }
            break;
            
        case 'scissor':
            if(computerSelection === 'rock'){
                return `You Lose! Computer got ${computerSelection}, which beats Scissor`;
            }
            if(computerSelection === 'paper'){
                return `You Won! Computer got ${computerSelection}`;
            }
            if(computerSelection === 'scissor'){
                return `It's a Draw! Computer also got ${computerSelection}`;
            }
            break;

        default:

            break;
    }
}

function playGame(){

    let playerScore = 0, computerScore = 0;
    let output = '';
    let playerInput = '';
    
    // *** 5 Rounds Logic ***
    // for(let i = 0; i < 5; i++){
    //     playerInput = prompt("Choose Rock, Paper or Scissor!");
    //     console.log((output = playRound(playerInput, getComputerChoice())));

    
    //     if(output.startsWith("You Won!")) playerScore++;
    //     if(output.startsWith("It's a Draw!")) continue;
    //     if(output.startsWith("You Lose!")) computerScore++;
    
    // }

    if(playerScore > computerScore) return `Player Won the Game! Congratulations!`;
    if(playerScore < computerScore) return `Computer Won the Game! Congratulations!`;
    if(playerScore === computerScore) return `It's a Draw! Nobody Won the Game`;

}



const rockButton = document.querySelector('#rock-btn');
const paperButton = document.querySelector('#paper-btn');
const scissorButton = document.querySelector('#scissor-btn');

rockButton.addEventListener('click', playRound('rock', getComputerChoice()));
paperButton.addEventListener('click', playRound('paper', getComputerChoice()));
scissorButton.addEventListener('click', playRound('scissor', getComputerChoice()));

























console.log(playGame());
