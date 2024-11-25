document.addEventListener("DOMContentLoaded", () => {
    const userChoiceDisplay = document.getElementById("user-choice");
    const computerChoiceDisplay = document.getElementById("computer-choice");
    const resultDisplay = document.getElementById("result");
    const choices = document.querySelectorAll(".choice");

    const choicesArray = ["rock", "paper", "scissors"];

    let userChoice = "";
    let computerChoice = "";

    // Add event listeners to all buttons
    choices.forEach(button => {
        button.addEventListener("click", () => {
            userChoice = button.getAttribute("data-choice");
            userChoiceDisplay.textContent = capitalize(userChoice);

            generateComputerChoice();
            determineWinner();
        });
    });

    function generateComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choicesArray.length);
        computerChoice = choicesArray[randomIndex];
        computerChoiceDisplay.textContent = capitalize(computerChoice);
    }

    function determineWinner() {
        if (userChoice === computerChoice) {
            resultDisplay.textContent = "It's a draw!";
            resultDisplay.style.color = "orange";
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "scissors" && computerChoice === "paper") ||
            (userChoice === "paper" && computerChoice === "rock")
        ) {
            resultDisplay.textContent = "You win!";
            resultDisplay.style.color = "green";
        } else {
            resultDisplay.textContent = "You lose!";
            resultDisplay.style.color = "red";
        }
    }

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
});
