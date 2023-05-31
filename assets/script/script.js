/******************************************/
/* External dependencies */
/******************************************/
var timer = document.querySelector("#timer");
var startBtn = document.querySelector(".center-button");

/******************************************/
/* Global variables and constants */
/******************************************/
var timerCount = 0;
var quizData = [
  {
    question:
      "Which iconic animal of South Africa is known as the King of the Jungle?",
    choices: ["Leopard", "Lion", "Cheetah", "Rhino"],
    correctAnswer: 1,
  },
  {
    question:
      "What is the largest land mammal found in South Africa, known for its long trunk and tusks?",
    choices: ["Elephant", "Cape Buffalo", "Giraffe", "Kudu"],
    correctAnswer: 0,
  },
  {
    question:
      "Which big cat species can be found in South Africa and is known for its distinctive rosette patterns on its fur?",
    choices: ["Tiger", "Leopard", "Cheetah", "Hyena"],
    correctAnswer: 1,
  },
  {
    question:
      "South Africa is home to two species of rhinoceros. Select one of them.",
    choices: ["White", "Spotted", "Black", "Long-Horned"],
    correctAnswer: [0, 2],
  },
  {
    question:
      "Which animal is known as one of the Big Five and has a strong, horned structure on its head?",
    choices: ["Cape Buffalo", "Wildebeest", "Rhino", "Impala"],
    correctAnswer: 2,
  },
  {
    question:
      "Which apex predator, known for its powerful presence and distinctive appearance, is often referred to as the ocean's top predator?",
    choices: ["Dusky Reef Shark", "Whale Shark", "Great White Shark", "Hound Shark"],
    correctAnswer: 2,
  },
];

/******************************************/
/* Function and class declarations */
/******************************************/
function timerFunc() {
  var timerInterval = setInterval(function (Event) {
    timerCount++;
    timer.textContent = timerCount;
  }, 1000);
}

/******************************************/
/* Event listeners */
/******************************************/
startBtn.addEventListener("click", timerFunc);

/******************************************/
/* Document manipulation */
/******************************************/

/******************************************/
/* Initialization code */
/******************************************/

/******************************************/
/* Main logic */
/******************************************/
