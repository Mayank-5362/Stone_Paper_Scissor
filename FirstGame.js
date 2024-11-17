document.addEventListener("DOMContentLoaded", function() {
    const choices = document.querySelectorAll(".choice");
    const resultDiv = document.querySelector(".result");
    const playAgainButton = document.getElementById("play-again");

    choices.forEach(choice => {
        choice.addEventListener("click", function() {
            const playerOne = this.id; // 'rock', 'paper', or 'scissors'
            const computerChoice = Math.floor(Math.random() * 3); // 0, 1, or 2
            const computer = computerChoice === 0 ? "rock" : computerChoice === 1 ? "paper" : "scissors";

            let result =
                playerOne === computer
                    ? "🤝 It's a Tie!"
                    : `${this.innerText} beats ${computer === 'rock' ? '🪨 Rock' : computer === 'paper' ? '📄 Paper' : '✂️ Scissors'} => ${
                        (playerOne === "rock" && computer === "scissors") ||
                        (playerOne === "paper" && computer === "rock") ||
                        (playerOne === "scissors" && computer === "paper")
                            ? "🎉 Player wins!"
                            : "👾 Computer wins!"
                    }`;

            resultDiv.textContent = result;
            playAgainButton.classList.remove("hidden");
        });
    });

    playAgainButton.addEventListener("click", function() {
        resultDiv.textContent = "";
        playAgainButton.classList.add("hidden");
    });
});
