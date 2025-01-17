document.addEventListener("DOMContentLoaded", () => {
    const promptElement = document.getElementById("prompt");
    const inputElement = document.getElementById("user-input");
    const feedbackElement = document.getElementById("feedback");
    const submitButton = document.getElementById("submit-btn");

    let currentPuzzle = 0;

    const puzzles = [
        {
            question: "Puzzle 1: What has keys but can't open locks?",
            answer: "piano",
        },
        {
            question: "Puzzle 2: The answer to life, the universe, and everything.",
            answer: "42",
        },
        {
            question: "Puzzle 3: I speak without a mouth and hear without ears. I have no body, but I come alive with the wind.",
            answer: "echo",
        },
    ];

    const updateGame = () => {
        if (currentPuzzle < puzzles.length) {
            promptElement.textContent = puzzles[currentPuzzle].question;
            feedbackElement.textContent = "";
            inputElement.value = "";
        } else {
            promptElement.textContent = "Congratulations! You've escaped the room!";
            inputElement.classList.add("hidden");
            submitButton.classList.add("hidden");
        }
    };

    submitButton.addEventListener("click", () => {
        const userAnswer = inputElement.value.toLowerCase().trim();
        if (userAnswer === puzzles[currentPuzzle].answer) {
            feedbackElement.textContent = "Correct! Moving to the next puzzle...";
            currentPuzzle++;
            setTimeout(updateGame, 1000);
        } else {
            feedbackElement.textContent = "Wrong answer. Try again!";
        }
    });

    // Initialize the game
    updateGame();
});
