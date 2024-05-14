# rock_paper_scissors

This is the third project in The Odin Project course.

The purpose is for a human to be able to play Rock, Paper, Scissors on a webpage.
First the required Javascript will be made and later the UI will be created.

To increase the efficinecy of my time I start the project by making a plan of the parts that are required.
Each part will be solved in pseudocode for now.

**Project planning for the Javascript**

For a human to be able to play rock, paper, scissors against a computer four parts are needed:
  1. Human input: An ability to choose one of the inputs: "rock", "paper", or "scissors".
  2. Computer choice: A randomized choice from the computer between the same three strings.
  3. Winner evaluation: rock>scissors, scissors>paper, paper>rock, human input = computer choice -> stalemate
  4. Winner declaration: "Congratulations, you won" / "Better luck next time"

**1. Human input**
let humanChoice = empty string
humanChoice = input string

(buttons with string inputs will be made in the UI later)

**2. Computer choice**
To get the computer to choose one of the three options randomly:

create variable with an empty string named "computerChoice"
create a variable named randomNumber
make randomNumber = randomly chosne number between 0 and 1
  if randomNumber <0,33
    computerChoice = "Rock"
  else if randomNumber <0,66
    computerChoice = "Paper"
  else 
    computerChoice = "Scissors"

**3. Winner evaluation**
To decide who has won the two results should be investigated:

let winner = empty string 
if humanChoice === computerChoice
  return winner = "stalemate"

  else if humanChoice === "Rock"
    if computerChoice === "Paper"
    return winner = "computer"
    else 
    return winner = "human"

  else if humanChoice === "Paper"
    if computerChoice === "Scissors"
    return winner = "computer"
    else
    return winner = "human"

  else if computerChoice === "Rock"
  return winner = "computer"
  else 
  return winner = "human"

**4. winner declaration**
if winner === "human"
  return console.log("Congratulations, you won!")

else
  return console.log("Sorry, the computer beat you. Please try again")

**End of pseudocode**


  
