let humanChoice = " ";
let computerChoice = " ";
let humanScore = 0;
let computerScore = 0;
let randomNumber = 0; 
let winner = " "

function playRound(humanChoice, computerChoice) {
    humanChoice = prompt("Please choose rock, paper or scissor");
    humanChoice =  humanChoice.toLowerCase();
    
    computerChoice = " "

        randomNumber = Math.random();
    if (randomNumber < 0.33) {
        computerChoice = "rock"
    }
    else if (randomNumber < 0.66) {
        computerChoice = "paper"
    }
    else 
        computerChoice = "scissors";

    if (humanChoice === computerChoice) {
        winner = "stalemate"
        console.log("It's a stalemate, please try again")
    }
        else if (humanChoice === "rock") {
            if (computerChoice === "paper"){
                winner = "computer";
                console.log("You lose, paper beats rock");
            }
            else winner = "human"
                console.log("Congratulations, rock beats scissors")
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "scissors"){
                winner = "computer";
                console.log("You lose, scissors beats paper");
            }
            else winner = "human"
                console.log("Congratulations, paper beats rock")
        }
        else if (computerChoice ==="rock"){
            winner = "computer"
            console.log("You lose, paper beats rock")
        }
            else(winner = "human")
            console.log("Congratulations, rock beats scissors");
    
    if (winner = "human")
    humanScore = humanScore + 1;
    else
    computerScore = computerScore + 1;
}