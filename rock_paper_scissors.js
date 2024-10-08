// Function that determines computer choice
let computerChoice = " ";

function getComputerChoice(){
    randomNumber = Math.random();
    const placeCompChosen = document.querySelector("#computerChoice");
    const showCompChosen = document.createElement("button");


    if (document.querySelector(".compChosen") != null){
    
        const removeCompChosen = document.querySelector(".compChosen");
        placeCompChosen.removeChild(removeCompChosen);
    }

    if (randomNumber > 0.66) {
        showCompChosen.setAttribute("id","btn_rock");
        computerChoice = "rock";  
    }

    else if (randomNumber > 0.33) {
        showCompChosen.setAttribute("id","btn_paper");
        computerChoice = "paper";
    }

    else {
        showCompChosen.setAttribute("id","btn_scissors");
        computerChoice = "scissors";
    }
    
    showCompChosen.setAttribute("class", "compChosen button");
    placeCompChosen.appendChild(showCompChosen);

    return computerChoice
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
            return winner = "you";
        }
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "scissors"){
            return winner = "computer";
        }

        else {
            return winner = "you";
        }

    }

    else if (computerChoice ==="rock"){
        return winner = "computer";
        }

    else {
        return winner = "you";
        }
    }

// Function that adds to the score when a human or computer wins
let humanScore = 0
let computerScore = 0
    
function scoreTracker(winner) {
    if (winner === "you"){
        humanScore = humanScore + 1
        return humanScore;  
    }

    else if (winner === "computer"){
        computerScore = computerScore + 1
        return computerScore;
    }
}


function playARound(humanChoice){
    getComputerChoice();
    determineWinner(humanChoice, computerChoice);
    scoreTracker(winner);

    if (winner === "stalemate"){
        roundMessage = "It's a stalemate";       
    }
    else {
        roundMessage = ("The point goes to " + winner);
    }

    const roundWinner = document.querySelector("#roundWinner");
    roundWinner.textContent = roundMessage;
    
    const compScore = document.querySelector("#computerScore");
    compScore.textContent = "The computer has " + computerScore + " points";

    const humScore = document.querySelector("#humanScore");
    humScore.textContent = "You have " + humanScore + " points";


    if (humanScore === 3 || computerScore === 3){
        const gameResult = document.querySelector("#gameResultText");

        const gameWinner = document.createElement("div");
        gameWinner.setAttribute("id", "gameWinner");

        if (humanScore === 3){
            gameWinner.textContent = "Congratulations, you are the winner!";
        }

        else { 
            gameWinner.textContent = "Unfortunately the computer won. Better luck next time.";
        }
        gameResult.appendChild(gameWinner);

        removePlayListeners();

        const createResetButton = document.createElement("button");
        createResetButton.setAttribute("id", "reset");
        createResetButton.setAttribute("class", "button");
        createResetButton.textContent = "Start a new game :-)";
        const resetButtonPlacement = document.querySelector("#resetButtonPlacement");
        resetButtonPlacement.appendChild(createResetButton);

        const resetButton = document.querySelector("#reset");
        resetButton.addEventListener("click", resetFunction);
        
    }
}

// Function that determines human choice
let humanChoice = " ";

function rockChosen(){
    humanChoice = "rock";
    playARound(humanChoice);
    const placeChosen = document.querySelector("#humanChoice");

    if (document.querySelector(".chosen") != null){

        const removeChosen = document.querySelector(".chosen");
        placeChosen.removeChild(removeChosen);
    }

    const showChosen = document.createElement("button");
    showChosen.setAttribute("id","btn_rock");
    showChosen.setAttribute("class", "chosen button");
    placeChosen.appendChild(showChosen);
};

function paperChosen(){
    humanChoice = "paper";
    playARound(humanChoice);

    const placeChosen = document.querySelector("#humanChoice");

    if (document.querySelector(".chosen") != null){

        const removeChosen = document.querySelector(".chosen");
        placeChosen.removeChild(removeChosen);
    }

    const showChosen = document.createElement("button");
    showChosen.setAttribute("id","btn_paper");
    showChosen.setAttribute("class", "chosen button");
    placeChosen.appendChild(showChosen);
};

function scissorsChosen(){
    humanChoice = "scissors";
    playARound(humanChoice);

    const placeChosen = document.querySelector("#humanChoice");
    if (document.querySelector(".chosen") != null){

        const removeChosen = document.querySelector(".chosen");
        placeChosen.removeChild(removeChosen);
    }

    const showChosen = document.createElement("button");
    showChosen.setAttribute("id","btn_scissors");
    showChosen.setAttribute("class", "chosen button");
    placeChosen.appendChild(showChosen);
};


// Function that adds event listeners to buttons
function addPlayListeners() {
    const btnRock = document.querySelector("#btn_rock");
    btnRock.addEventListener("click", rockChosen);
    
    const btnPaper = document.querySelector("#btn_paper");
    btnPaper.addEventListener("click", paperChosen);
    
    const btnScissors = document.querySelector("#btn_scissors");
    btnScissors.addEventListener("click", scissorsChosen);
};

// Function that removes event listeneres from buttons

function removePlayListeners() {
    const btnRock = document.querySelector("#btn_rock");
    btnRock.removeEventListener("click", rockChosen);

    const btnPaper = document.querySelector("#btn_paper");
    btnPaper.removeEventListener("click", paperChosen);

    const btnScissors = document.querySelector("#btn_scissors");
    btnScissors.removeEventListener("click", scissorsChosen);
};

//Reset function
function resetFunction(){
    addPlayListeners();
    
    computerScore = 0;
    humanScore = 0;

    const placeChosen = document.querySelector("#humanChoice");
    const removeChosen = document.querySelector(".chosen");
    placeChosen.removeChild(removeChosen);

    const placeCompChosen = document.querySelector("#computerChoice");
    const removeCompChosen = document.querySelector(".compChosen");
    placeCompChosen.removeChild(removeCompChosen);

    const compScore = document.querySelector("#computerScore");
    compScore.textContent = computerScore;

    const humScore = document.querySelector("#humanScore");
    humScore.textContent = 0;

    resetButtonPlacement.removeChild(reset);
    gameResultText.removeChild(gameWinner);
};



addPlayListeners();
