document.addEventListener("DOMContentLoaded", () => {
    const sentenceDisplay = document.getElementById("sentence");
    const typedTextArea = document.getElementById("typed-text");
    const startButton = document.getElementById("start-button");
    const timeTakenDisplay = document.getElementById("time-taken");
    const typingSpeedDisplay = document.getElementById("typing-speed");

    const sentences = [
        "the quick brown fox jumps over the lazy dog"
        // "A journey of a thousand miles begins with a single step.",
        // "Typing fast is an art that comes with practice and patience.",
        // "JavaScript is the language of the web."
    ];

    let startTime = 0;
    let isTestRunning = false;

    // Start the typing test
    startButton.addEventListener("click", () => {
        // Reset the fields
        typedTextArea.value = "";
        typedTextArea.disabled = false;
        timeTakenDisplay.textContent = "-";
        typingSpeedDisplay.textContent = "-";
        isTestRunning = true;

        // Display a random sentence
        const randomIndex = Math.floor(Math.random() * sentences.length);
        sentenceDisplay.textContent = sentences[randomIndex];

        // Start the timer
        startTime = new Date().getTime();
        typedTextArea.focus();
    });

    // Event listener to check typing progress
    typedTextArea.addEventListener("input", () => {
        if (!isTestRunning) return;

        const typedText = typedTextArea.value.trim();
        const originalText = sentenceDisplay.textContent;

        // Check if the user has completed the sentence
        if (typedText === originalText) {
            isTestRunning = false; // Stop the test

            const endTime = new Date().getTime();
            const timeTaken = (endTime - startTime) / 1000; // Calculate time in seconds
            const wordsCount = originalText.split(" ").length;
            const typingSpeed = Math.round((wordsCount / timeTaken) * 60); // Calculate WPM

            // Display results
            timeTakenDisplay.textContent = `${timeTaken.toFixed(2)} seconds`;
            typingSpeedDisplay.textContent = `${typingSpeed} WPM`;

            // Disable textarea after completion
            typedTextArea.disabled = true;
        }
    });
});
