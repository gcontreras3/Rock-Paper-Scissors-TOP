// take user input with prompt
// assign prompt a variable playerChoice
// assign computerChoice to a random number
// user that number to compare playerChoice input
// if playerChoice is equal to computer choice tie
// Take score

// Trying to add conditionals to the game in order to play another game after the first

let choices = ["Rock", "Paper", "Scissors"]
let computerChoice = choices[Math.floor(Math.random()*choices.length)]
// let choices = ["Rock", "Paper", "Scissors"]
let playerChoose = prompt("Pick your weapon. Rock, Paper or Scissors. Choose wisely!")
let computerScore = 0;
let playerScore = 0;

function game(){
   
// This function uses takes a random number and associates it with an index in the array
function getComputerChoice() {
    
    console.log(`Computer selected ${computerChoice}`)
}



// This function takes in user input and checks if the input is correct and assigns it to the playerChoice
function playerChoice(){
    
    if (playerChoose.toString() === choices[0]){
        console.log("You selected Rock as your weapon of choice")
    } else if (playerChoose.toString() === choices[1]){
        console.log("You selected Paper as your weapon of choice")
    } else if (playerChoose.toString() === choices[2]){
        console.log("You selected Scissors as your weapon of choice")
    }
    console.log("Prepare to battle")
}

function score(){
  
    
    if (playerChoose === computerChoice){
        console.log("Stalemate!")
    } else if (playerChoose !== computerChoice){
        if (playerChoose === "Rock" && computerChoice === "Scissors"){
            console.log("Player wins! Rock beats Scissors")
            playerScore++
        } else if(playerChoose === "Scissors" && computerChoice === "Paper"){
            console.log("Player wins! Scissors beats Paper")
            playerScore++
        } else if (playerChoose === "Paper" && computerChoice === "Rock"){
            console.log("Player wins! Paper beats Rock")
            playerScore++
        }else if (playerChoose === "Rock" && computerChoice === "Paper"){
            console.log("Computer wins! Paper beats Rock")
            computerScore++
        }else if (playerChoose === "Scissors" && computerChoice === "Rock"){
            console.log("Computer wins! Rock beats Scissors")
            computerScore++
        }else if (playerChoose === "Paper" && computerChoice === "Scissors"){
            console.log("Computer wins! Scissors beats Paper")
            computerScore++
        }
    }
    playerScore = playerScore
    computerScore = computerScore
    console.log(`The score is ${playerScore} and ${computerScore}`)
}
getComputerChoice()
playerChoice()
score()
}
game()

// playerChoice()
// getComputerChoice()

// function game(){
//     let choices = ["Rock", "Paper", "Scissors"]
    
//     function playRound (playerSelection, computerSelection){
    
    
//     return 
//     }
// }

// getComputerChoice()