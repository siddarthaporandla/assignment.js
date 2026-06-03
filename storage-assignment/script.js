const localScoreElement = document.getElementById("localScore");
const sessionScoreElement = document.getElementById("sessionScore");
const incrementBtn = document.getElementById("incrementBtn");

// Get existing scores or initialize to 0
let localScore = Number(localStorage.getItem("localScore")) || 0;
let sessionScore = Number(sessionStorage.getItem("sessionScore")) || 0;

// Display scores on page load
localScoreElement.textContent = localScore;
sessionScoreElement.textContent = sessionScore;

// Increment button
incrementBtn.addEventListener("click", () => {

    localScore++;
    sessionScore++;

    // Store updated scores
    localStorage.setItem("localScore", localScore);
    sessionStorage.setItem("sessionScore", sessionScore);

    // Update UI
    localScoreElement.textContent = localScore;
    sessionScoreElement.textContent = sessionScore;
});