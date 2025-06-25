//write your code here

const hands = ["rock", "paper", "scissors", "lizard", "spock"];

// Computer choice function
const ComputerChoice = () => {
    return hands[Math.floor(Math.random() * hands.length)];
}

//Check rules and winer
const CheckingWinner = (humanChoice) => {
    let computer = ComputerChoice();

    let result = "Sorry loser !! Try again !!";

    console.log("You choose: " + humanChoice);
    console.log("Computer say: " + computer);

    switch (true) {
        case humanChoice === computer:
            result = "This is a well-played draw !!";
            break;

        case humanChoice === "rock" && (computer === "scissors" || computer === "lizard"):
        case humanChoice === "paper" && (computer === "rock" || computer === "spock"):
        case humanChoice === "scissors" && (computer === "paper" || computer === "lizard"):
        case humanChoice === "lizard" && (computer === "paper" || computer === "spock"):
        case humanChoice === "spock" && (computer === "scissors" || computer === "rock"):
            result = "Congrats you're the winner !!";
            break;
    }

    return result;

}

// Start Game
let userChoice = null;

let rightChoice = false;

while (rightChoice == false) {
    userChoice = prompt("Choose between: rock, paper, scissors, lizard or spock.");

    // Right Conditions check
    if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors" && userChoice != "lizard" && userChoice != "spock") {
        console.log("It's your choice, play or get out !!, this is a serious game.");
    }
    else {
        console.log("nice choice Good Luck");
        rightChoice = true;
    }
}

console.log(CheckingWinner(userChoice));