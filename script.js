//Game
let outWinner = document.querySelector(".out-winner");
let computerScoreOut = document.querySelector(".computer_score");
let playerScoreOut = document.querySelector(".player_score")
let playerScore = 1;
let computerScore = 1;

//Computer choise
let compOptions = new Array ("Rock", "Paper", "Scissors");
let outComp = document.querySelector(".computer_select");
let computerChoice = "";

function getComputerChoice (){
    const randomNum =  Math.floor(Math.random()*compOptions.length);
    computerChoice = compOptions[randomNum];
    outComp.innerHTML = computerChoice;
}

//Player choice and game round
let outPlayer = document.querySelector(".player_select");
let playerSelect = "";
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

function playerChoice(){
    playerSelect = this.id;
    outPlayer.innerHTML = playerSelect.charAt(0).toUpperCase() + playerSelect.slice(1);
    getComputerChoice();
    gameRound();
    console.log(computerScore)
    console.log(playerScore)
    gameResult();
}

function gameRound(){
    if (computerChoice == "Rock" && playerSelect == "scissors" ||
        computerChoice == "Scissors" && playerSelect == "paper" ||
        computerChoice == "Paper" && playerSelect == "rock"){
            outWinner.innerHTML = "You Lose. Try again!"
            computerScoreOut.innerHTML = computerScore++;
   } else if (computerChoice == "Scissors" && playerSelect == "rock" ||
        computerChoice == "Paper" && playerSelect == "scissors" ||
        computerChoice == "Rock" && playerSelect == "paper"){
            outWinner.innerHTML = "You win! Let's play again!";
            playerScoreOut.innerHTML = playerScore++;
   } else if (computerChoice == playerSelect.charAt(0).toUpperCase() + playerSelect.slice(1)){
       outWinner.innerHTML = "It's a tie. Try again!";
   }
}

function gameResult(){
        if (computerScore === 4){
            outWinner.innerHTML = "I'm the winner of the game!";

            rockBtn.onclick = null;
            paperBtn.onclick = null;
            scissorsBtn.onclick = null;

        } else if (playerScore === 4){
            outWinner.innerHTML = "Congratulations! You win the game!"

            rockBtn.onclick = null;
            paperBtn.onclick = null;
            scissorsBtn.onclick = null;
        }
}

function restartGame() {
    computerScore = 1;
    playerScore = 1;
    computerScoreOut.innerHTML = 0;
    playerScoreOut.innerHTML = 0;
    outWinner.innerHTML = "";
    outComp.innerHTML = "";
    outPlayer.innerHTML = "";
    rockBtn.onclick = playerChoice;
    paperBtn.onclick = playerChoice;
    scissorsBtn.onclick = playerChoice; 
}

rockBtn.onclick = playerChoice;
paperBtn.onclick = playerChoice;
scissorsBtn.onclick = playerChoice; 

screen.orientation.lock(landscape);