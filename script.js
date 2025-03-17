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

function playGame() {
    for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
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
    if(humanScore > computerScore) {
        console.log("Congratulations! You won!")
    } else if (humanScore < computerScore) {
        console.log("You lost! Better luck next time!")
    } else {
        console.log("It's a draw")
    }
}