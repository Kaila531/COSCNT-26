/*Kaila Trafton
guessing.js
10/28/2026*/

//Generate random whole number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
//Keeps track of the number of guesses
let turns = 0;
//stores previous guess in array
let previousGuesses = [];

function checkGuess() {
    let guess= Number(document.getElementById("guess").value);
    //add 1 to turn counter
    turns++;
    previousGuesses.push(guess);

    //display previous guesses
    document.getElementById("guesses").textContent = "Previous guesses: "
    + previousGuesses.join(", ");

    if(guess === randomNumber){
        document.getElementById("message").textContent = "You Won!";
        if (confirm("Play again?")) {
            resetGame();
        }
    } else if (turns === 10) {
        document.getElementById("message").textContent = "Game Over! The number was " + randomNumber;
        if (confirm("Play again?")) {
            resetGame();
        }
    }
    else if (guess < randomNumber) {
        document.getElementById("message").textContent = "Too low!";
    }
    else {
        document.getElementById("message").textContent = "Too High!";
    }
}

function resetGame() {
    randomNumber =
    Math.floor(Math.random() * 100) + 1;
    turns = 0;
    previousGuesses = [];

    document.getElementById("message").textContent = "";
    document.getElementById("guesses").textContent = "Previous guesses: ";
    document.getElementById("guess").value = "";
}