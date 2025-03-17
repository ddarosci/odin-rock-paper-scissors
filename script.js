function getComputerChoice() {
    let randomNumber = Math.trunc(Math.random() * 3);
    if(randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose between rock, paper, or scissors: ");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock":
            if(computerChoice === "paper") {
                console.log("You lose! Paper beats rock");
                computerScore++;
            }
            else if(computerChoice === "scissors") {
                console.log("You win! Rock beats scissors");
                humanScore++;
            } else {
                console.log("It's a draw! You both choose the same object");
            }
            break;
        case "paper":
            if(computerChoice === "rock") {
                console.log("You win! Paper beats rock");
                humanScore++;
            } else if(computerChoice === "scissors") {
                console.log("You lose! Scissors beats paper");
                computerScore++;
            } else {
                console.log("It's a draw! You both choose the same object");
            }
            break;
        case "scissors":
            if(computerChoice === "rock") {
                console.log("You lose! Rock beats scissors");
                computerScore++;
            } else if(computerChoice === "paper") {
                console.log("You win! Scissors beats paper");
                humanScore++;
            } else {
                console.log("It's a draw! You both choose the same object");
            }
            break;
            default:
                console.log("You did not pass the functions as arguments")
    }
}