let humanChoice = prompt("Please choose rock, paper or scissor");
let computerChoice = " "

let randomNumber; 
randomNumber = Math.random();
if (randomNumber < 0.33) {
    clearTimeoutomputerChoice = "rock"
}
else if (randomNumber < 0.66) {
    computerChoice = "paper"
}
else 
    computerChoice = "scissors";

let winner = " "

if (humanChoice === computerChoice) {
    winner = "stalemate"
}
    else if (humanChoice === "rock") {
        if (computerChoice === "paper"){
            winner = "computer"
        }
        else winner = "human"
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors"){
            winner = "computer"
        }
        else winner = "human"
    }
    else if (computerChoice ==="rock"){
        winner = "computer"
    }
        else(winner = "human")