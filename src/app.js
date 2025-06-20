//write your code here

const hands = ["rock","paper","scissors","lizard","spock"];

// Computer choice function
const  ComputerChoice = () => {
    return hands[Math.floor(Math.random() * hands.length)];
}
// console.log(ComputerChoice());

//Check rules and winer
 const CheckingWinner = (humanChoice) =>
 {
    let computer = ComputerChoice();

    console.log("You choose: " + humanChoice);
    console.log("Computer say: " + computer);

    switch (humanChoice) {
        case "rock":

            (computer == "scissors" || computer == "lizard") ? console.log("Congrats you're the winner !!") : (computer == "spock" || computer == "paper") ? console.log("Sorry looser !! try again !!") : console.log("This is a well-played draw !!");
            break;

        case "paper":

            (computer == "rock" || computer == "spock") ? console.log("Congrats you're the winner !!") : (computer == "scissors" || computer == "lizard") ? console.log("Sorry looser !! try again !!") : console.log("This is a well-played draw !!");
            break;

        case "scissors":

            (computer == "paper" || computer == "lizard") ? console.log("Congrats you're the winner !!") : (computer == "rock" || computer == "spock") ? console.log("Sorry looser !! try again !!") : console.log("This is a well-played draw !!");
            break;

        case "lizard":

            (computer == "paper" || computer == "spock") ? console.log("Congrats you're the winner !!") : (computer == "rock" || computer == "scissors") ? console.log("Sorry looser !! try again !!") : console.log("This is a well-played draw !!");
            break;

        case "spock":

            (computer == "scissors" || computer == "rock") ? console.log("Congrats you're the winner !!") : (computer == "spock" || computer == "lizard") ? console.log("Sorry looser !! try again !!") : console.log("This is a well-played draw !!");
            break;
}
    
 }

// Start Game
let userChoice = null;

let rightChoice = false;

while (rightChoice == false)
{
    userChoice = prompt("Choose between: rock, paper, scissors, lizard or spock.");

     if(userChoice != "rock" && userChoice != "paper" && userChoice != "scissors" && userChoice != "lizard" && userChoice != "spock")
     {
         console.log("It's your choice, play or get out !!, this is a serious game.");
     }
     else
     {
        console.log("nice choice Good Luck");
        rightChoice = true;
    }
}

CheckingWinner(userChoice);