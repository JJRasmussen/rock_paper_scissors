// Function that determines computer choice
let computerChoice = " ";

function getComputerChoice(){
    randomNumber = Math.random();

    if (randomNumber < 1) {
        return computerChoice = "rock";
    }

    else if (randomNumber < 0.66) {
        return computerChoice = "paper";
    }

    else {
        return computerChoice = "scissors";
    }

    return computerChoice
}

// Function that determines human choice
let humanChoice = " ";

function getHumanChoice(){
    humanChoice = prompt("Please choose rock, paper or scissor");
    humanChoice = humanChoice.toLowerCase();

    return humanChoice
}


// Function that determines the winner
let winner = " ";

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return winner = "stalemate";
    }

    else if (humanChoice === "rock") {
        if (computerChoice === "paper"){
            return winner = "computer";
        }

        else {
            return winner = "human";
        }
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "scissors"){
            return winner = "computer";
        }

        else {
            return winner = "human";
        }

    }

    else if (computerChoice ==="rock"){
        return winner = "computer";
        }

    else {
        return winner = "human";
        }
    }


// Function that adds to the score when a human or computer wins

let humanScore = 0
let computerScore = 0
    
function scoreTracker(winner) {
    if (winner === "human"){
        humanScore = humanScore + 1
        return humanScore;  
    }

    else if (winner === "computer"){
        computerScore = computerScore + 1
        return computerScore;
    }
}


function playARound(){
    getComputerChoice();
    getHumanChoice();
    determineWinner(humanChoice, computerChoice);
    scoreTracker(winner);

    console.log("Computer choses " + computerChoice);
    console.log("Human choses " + humanChoice);
    
    if (winner === "stalemate"){
        console.log("It's a stalemate")        
    }
    else {
        console.log("The winner is " + winner);
    }

    console.log("The score is: Human: " + humanScore + " Computer: " + computerScore);
    
    return [humanScore, computerScore]

}

function playGame(rounds) {
    for (let i = 1; i <= rounds; i++){
        playARound();
    }
    if (humanScore > computerScore){
        console.log("Congratulations, you are the winner!")
    }
    else if (computerScore > humanScore){
        console.log("Unfortunately the computer won, better luck next timer")    
    }

    else {
        console.log("It's a stalemate :-)")
    }
    return;

}

playGame(3)