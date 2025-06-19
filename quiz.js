// Step 1: Define the checkAnswer function
function checkAnswer() {
  const correctAnswer = "4"; // Step 2: Define correct answer

  // Step 3: Get the selected radio button
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Check if user selected an answer
  if (!selectedOption) {
    document.getElementById('feedback').textContent = "Please select an answer!";
    return;
  }

  const userAnswer = selectedOption.value;

  // Step 4: Compare and give feedback
  const feedbackDiv = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedbackDiv.textContent = "✅ Correct! Well done.";
    feedbackDiv.style.color = "green";
  } else {
    feedbackDiv.textContent = "❌ That's incorrect. Try again!";
    feedbackDiv.style.color = "red";
  }
}

// Step 5: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
