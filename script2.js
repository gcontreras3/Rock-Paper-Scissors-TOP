const choices = ["rock", "paper", "scissors"];

function game() {
    for (let i = 1; i <= 5; i++){
        playRound();
    }
    // play the game
    playRound();
    // play five rounds
    // console based
}

function playRound (){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    console.log(playerSelection)
}

function playerChoice () {
    // get input from player
    let input = prompt("Pick your weapon. Rock, Paper or Scissors. Choose wisely!").toLowerCase();
    while (input == null) {
        input = prompt("Pick your weapon. Rock, Paper or Scissors. Choose wisely!").toLowerCase();
    }
    let check = validateInput(input);
    if (check) {
        console.log(input)
    }
    // console.log(input)
}

function computerChoice () {
    // get random input for computer
    return choices[Math.floor(Math.random()*choices.length)];
}
function validateInput(choice) {
    if (choices.includes(choice)){
        return true;
    } else {
        return false;
    }
}
game();