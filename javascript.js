
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

function playRound(playerSelection){

    // playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(`Player selected ${playerSelection}`);
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

const resultDisplay = document.querySelector('.result-div');

const resultMessage = document.createElement('p');
const score = document.createElement('p');

resultDisplay.appendChild(resultMessage);
resultDisplay.appendChild(score);

let playerScore = 0;
let computerScore = 0;


rockButton.addEventListener('click', result => {
    result = playRound('rock');
    resultMessage.textContent = result;

    if(result.startsWith('You W')) playerScore++;
    if(result.startsWith('You L')) computerScore++; 
    
    score.textContent = `Player: ${playerScore} Points || Computer: ${computerScore} Points`;

    if(playerScore === 5) {
        score.textContent = 'You Won the game! Congratulations!';
        playerScore = 0;
        computerScore = 0;
    }
    if(computerScore === 5) {
        score.textContent = 'Game Over, You Lost the game!';        
        playerScore = 0;
        computerScore = 0;
    }
});

paperButton.addEventListener('click', result => {
    result = playRound('paper');
    resultMessage.textContent = result;

    if(result.startsWith('You W')) playerScore++;
    if(result.startsWith('You L')) computerScore++;

    score.textContent = `Player: ${playerScore} Points || Computer: ${computerScore} Points`;

    if(playerScore === 5) {
        score.textContent = 'You Won the game! Congratulations!';
        playerScore = 0;
        computerScore = 0;
    }
    if(computerScore === 5) {
        score.textContent = 'Game Over, You Lost the game!';        
        playerScore = 0;
        computerScore = 0;
    }
});

scissorButton.addEventListener('click', result => {
    result = playRound('scissor');
    resultMessage.textContent = result;

    if(result.startsWith('You W')) playerScore++;
    if(result.startsWith('You L')) computerScore++;

    score.textContent = `Player: ${playerScore} Points || Computer: ${computerScore} Points`;

    if(playerScore === 5) {
        score.textContent = 'You Won the game! Congratulations!';
        playerScore = 0;
        computerScore = 0;
    }
    if(computerScore === 5) {
        score.textContent = 'Game Over, You Lost the game!';        
        playerScore = 0;
        computerScore = 0;
    }
});
























// console.log(playGame());
