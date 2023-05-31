/******************************************/
/* External dependencies */
/******************************************/
var timer = document.querySelector("#timer");
var startBtn = document.querySelector(".center-button");
var questionElement = document.querySelector("#question");
var choiceElement = document.querySelector("#choices");

/******************************************/
/* Global variables and constants */
/******************************************/
var timerCount = 0;
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
    choices: ["1. White", "2. Spotted", "3. Black", "4. Long-Horned"],
    correctAnswer: [0, 2],
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
var currentTime = 0;
var start1 = document.getElementsByClassName("startPage")[0];
var start2 = document.getElementsByClassName("startPage")[1];
var start3 = document.getElementsByClassName("center-wrapper")[0];
var selectedChoice = "";
var correctAnswer = "";
var isCorrect = false;
/******************************************/
/* Function and class declarations */
/******************************************/
// Question display function
function displayQuestions() {
  start1.textContent = " ";
  start2.textContent = " ";
  start3.textContent = " ";
  var currentData = quizData[currentQuestion];
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

  // Timing function
  function timerFunc() {
    var timerInterval = setInterval(function (Event) {
      timerCount++;
      timer.textContent = timerCount;
    }, 1000);
  }
  timerFunc();

  //   next Question function
  choiceElement.addEventListener("click", function (Event) {
    selectedChoice = Event.target.value;
    console.log(selectedChoice);

    correctAnswer = currentData.correctAnswer;
    console.log(correctAnswer);

    if (selectedChoice == correctAnswer) {
      console.log("Correct!");
    } else {
      console.log("Wrong!");
    }

    isCorrect = selectedChoice == correctAnswer;

    if (isCorrect === true) {
      console.log(isCorrect);
      currentQuestion++;
    }
  });
}

/******************************************/
/* Event listeners */
/******************************************/
startBtn.addEventListener("click", displayQuestions);

/******************************************/
/* Document manipulation */
/******************************************/

/******************************************/
/* Initialization code */
/******************************************/

/******************************************/
/* Main logic */
/******************************************/
