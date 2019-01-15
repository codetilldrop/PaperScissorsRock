var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

var resultTextBox = document.getElementById('result');
var computerResult = document.getElementById('computer');  
var userResult = document.getElementById('user');  

if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
console.log("User    : " + userChoice);
console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!"
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins!"
        } else {
            return "paper wins!"
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins!"
        } else {
            return "scissors wins!"
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins!"
        } else {
            return "scissors wins!"
        }
    } else {
        return "Invalid choice '" + choice1 + "'";
    }
};
var result = compare(userChoice, computerChoice);

// Displaying result on web page
resultTextBox.innerHTML += result;
userResult.innerHTML = userChoice;
computerResult.innerHTML = computerChoice;