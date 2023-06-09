/******************************************/
/* External dependencies */
/******************************************/
var timer = document.querySelector("#timer");
var startBtn = document.querySelector(".center-button");
var questionElement = document.querySelector("#question");
var choiceElement = document.querySelector("#choices");
var choiceStatus = document.querySelector("#choice-status");
var scoreElement = document.querySelector("#score");
var userDetailsElement = document.querySelector("#user-details");
var submitButton = document.querySelector("#submit-button");
var start1 = document.getElementsByClassName("startPage")[0];
var start2 = document.getElementsByClassName("startPage")[1];
var start3 = document.getElementsByClassName("center-wrapper")[0];
var scoresList = document.querySelector("#scores");
var clearScoresBtn = document.querySelector("#clear-scores");
var viewScoresBtn = document.querySelector("#view-scores-btn");
var playAgainBtn = document.querySelector("#play-again-btn");

/******************************************/
/* Global variables and constants */
/******************************************/
var timerCount = 60;
var quizData = [
  {
    question:
      "Which iconic animal of South Africa is known as the King of the Jungle?",
    choices: ["1. Leopard", "2. Lion", "3. Cheetah", "4. Rhino"],
    correctAnswer: 1,
  },
  {
    question:
      "What is the largest land mammal found in South Africa, known for its long trunk and tusks?",
    choices: ["1. Elephant", "2. Cape Buffalo", "3. Giraffe", "4. Kudu"],
    correctAnswer: 0,
  },
  {
    question:
      "Which big cat species can be found in South Africa and is known for its distinctive rosette patterns on its fur?",
    choices: ["1. Tiger", "2. Leopard", "3. Cheetah", "4. Hyena"],
    correctAnswer: 1,
  },
  {
    question:
      "South Africa is home to two species of rhinoceros. Select one of them.",
    choices: ["1. White", "2. Spotted", "3. Horned", "4. Long-Horned"],
    correctAnswer: 0,
  },
  {
    question:
      "Which animal is known as one of the Big Five and has a strong, horned structure on its head?",
    choices: ["1. Cape Buffalo", "2. Wildebeest", "3. Rhino", "4. Impala"],
    correctAnswer: 2,
  },
  {
    question:
      "Which apex predator, known for its powerful presence and distinctive appearance, is often referred to as the ocean's top predator?",
    choices: [
      "1. Dusky Reef Shark",
      "2. Whale Shark",
      "3. Great White Shark",
      "4. Hound Shark",
    ],
    correctAnswer: 2,
  },
];

var currentQuestion = 0;
var currentTime = 60;
var selectedChoice = "";
var correctAnswer = "";
var isCorrect = false;
var score = 0;
var currentData = "";
var correct = "Correct. Good Choice!";
var incorrect = "Wrong. Better Luck Next Time!";
var timerInterval = "";
var userName = "";
userDetailsElement.style.display = "none";
submitButton.style.display = "none";
var highScores = [];
var timeDifference = "";

/******************************************/
/* Function and class declarations */
/******************************************/
//   next Question function
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    displayQuestions();
  } else {
    timeDifference = 60 - timerCount;
    console.log("Quiz Finished");
    choiceElement.textContent = "";
    questionElement.textContent = "Quiz Completed";
    scoreElement.innerHTML =
      "Score: " +
      score +
      " out of 6." +
      "<br>Time: " +
      timeDifference +
      " seconds.";
    userDetailsElement.style.display = "block";
    submitButton.style.display = "block";
    userName = userDetailsElement.value;
    clearInterval(timerInterval);
    playAgainBtn.style.display = "block";
  }
}

// Answer is correct or wrong
choiceElement.addEventListener("click", function (event) {
  // Convert selectedChoice to integer
  selectedChoice = parseInt(event.target.value);
  console.log(selectedChoice);

  correctAnswer = currentData.correctAnswer;
  console.log(correctAnswer);

  if (selectedChoice === correctAnswer) {
    // Use strict equality operator to compare
    console.log("Correct!");
    score++;
    displayTextForTimeCorrect();
    console.log(score);
  } else {
    console.log("Wrong!");
    timerCount -= 5;
    displayTextForTimeIncorrect();
  }
  nextQuestion();
});

// Question display function
function displayQuestions() {
  start1.textContent = " ";
  start2.textContent = " ";
  start3.textContent = " ";
  currentData = quizData[currentQuestion];
  questionElement.textContent = currentData.question;

  //   Clear previous choice
  choiceElement.innerHTML = "";

  // display choices as buttons
  for (let i = 0; i < currentData.choices.length; i++) {
    var choiceButton = document.createElement("Button");
    choiceButton.textContent = currentData.choices[i];
    choiceButton.value = i;
    choiceElement.appendChild(choiceButton);
  }
}

// Timing function
function timerFunc() {
  timerInterval = setInterval(function (Event) {
    timerCount--;
    timer.textContent = timerCount;

    if (timerCount <= 0) {
      var timeDifference = 60 - timerCount;
      console.log("Out of time!");
      choiceElement.textContent = "";
      questionElement.textContent = "You're out of time!";
      scoreElement.innerHTML =
        "Score: " + score + " out of 6." + "<br>Time: " + " Too much!";
      userDetailsElement.style.display = "block";
      submitButton.style.display = "block";
      userName = userDetailsElement.value;
      clearInterval(timerInterval);
    }
  }, 1000);
}

// Time that text is displayed for if answer is correct
function displayTextForTimeCorrect(text, duration) {
  choiceStatus.textContent = correct;
  setTimeout(function () {
    choiceStatus.textContent = "";
  }, 350);
}

// Time that text is displayed for if answer is incorrect
function displayTextForTimeIncorrect(text, duration) {
  choiceStatus.textContent = incorrect;
  setTimeout(function () {
    choiceStatus.textContent = "";
  }, 350);
}

// Function to render the scores list
function renderScores() {
  if (!Array.isArray(highScores)) {
    highScores = [];
  }
  scoresList.innerHTML = "";

  for (let i = 0; i < highScores.length; i++) {
    var scoreEntry = highScores[i];

    var li = document.createElement("li");
    li.innerHTML =
      "<b>Name:</b> " +
      scoreEntry.Name +
      "<br><b>Score:</b> " +
      scoreEntry.Score +
      " out of 6" +
      "<br><b>Time:</b> " +
      scoreEntry.Time +
      " seconds";
    li.setAttribute("data-index", i);
    scoresList.appendChild(li);
  }
}

// Function to retrieve scores from local storage
function getStoredScores() {
  var storedScores = localStorage.getItem("HighScores");
  if (storedScores) {
    highScores = JSON.parse(storedScores);
  }
  renderScores();
}

// Function to clear all scores from local storage
function clearScores() {
  highScores = [];
  localStorage.removeItem("HighScores");
  renderScores();
}

function resetQuiz() {
  currentQuestion = 0;
  timerCount = 60;
  score = 0;
  selectedChoice = "";
  correctAnswer = "";
  isCorrect = false;
  userDetailsElement.value = "";
  choiceStatus.textContent = "";
  scoresList.innerHTML = "";
  clearInterval(timerInterval);
  timer.textContent = timerCount;
}

function startQuiz() {
  displayQuestions();
  timerFunc();
}

// Function to display high scores
function displayHighScores() {
  start1.textContent = "";
  start2.textContent = "";
  start3.textContent = "";
  questionElement.textContent = "Highscores:";
  choiceElement.textContent = "";
  choiceStatus.textContent = "";
  scoreElement.textContent = "";
  userDetailsElement.style.display = "none";
  submitButton.style.display = "none";
  playAgainBtn.style.display = "none";
  renderScores();
}

/******************************************/
/* Event listeners */
/******************************************/
startBtn.addEventListener("click", function () {
  displayQuestions();
  timerFunc();
});

submitButton.addEventListener("click", function () {
  questionElement.textContent = "Highscores:";
  userDetailsElement.style.display = "none";
  scoreElement.textContent = "";
  submitButton.style.display = "none";
  var newScoreEntry = {
    Name: userDetailsElement.value,
    Score: score,
    Time: timeDifference,
  };
  highScores.push(newScoreEntry);
  localStorage.setItem("HighScores", JSON.stringify(highScores));
  renderScores();
});

clearScoresBtn.addEventListener("click", function () {
  clearScores();
});

// Event listener for "View Highscores" button
viewScoresBtn.addEventListener("click", displayHighScores);

playAgainBtn.addEventListener("click", function () {
  resetQuiz();
  startQuiz();
});

/******************************************/
/* Document manipulation */
/******************************************/

/******************************************/
/* Initialization code */
/******************************************/
getStoredScores();
