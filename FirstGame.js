document.addEventListener("DOMContentLoaded", function() {
    const choices = document.querySelectorAll(".choice");
    const resultDiv = document.querySelector(".result");
    const playAgainButton = document.getElementById("play-again");

    choices.forEach(choice => {
        choice.addEventListener("click", function() {
            const playerOne = this.id;
            const computerChoice = Math.floor(Math.random() * 3); 
            const computer = computerChoice === 0 ? "rock" : computerChoice === 1 ? "paper" : "scissors";

            let resultMessage;
            let winnerMessage;

           
            if (playerOne === computer) {
                resultMessage = `🤝 It's a Tie!`;
                winnerMessage = "";
            } else if (
                (playerOne === "rock" && computer === "scissors") ||
                (playerOne === "paper" && computer === "rock") ||
                (playerOne === "scissors" && computer === "paper")
            ) {
                resultMessage = `${this.innerText} beats ${computer === 'rock' ? '🪨 Rock' : computer === 'paper' ? '📄 Paper' : '✂️ Scissors'}`;
                winnerMessage = "🎉 Player wins!";
            } else {
                resultMessage = `${this.innerText} is beaten by ${computer === 'rock' ? '🪨 Rock' : computer === 'paper' ? '📄 Paper' : '✂️ Scissors'}`;
                winnerMessage = "👾 Computer wins!";
            }

            
            resultDiv.textContent = resultMessage + " " + winnerMessage;
            playAgainButton.classList.remove("hidden");
        });
    });

    playAgainButton.addEventListener("click", function() {
        resultDiv.textContent = "";
        playAgainButton.classList.add("hidden");
    });
});
