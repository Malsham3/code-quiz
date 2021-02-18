//assigning variables to HTML elements, in order to be called later on in the script.
const beginBtn = document.getElementById("begin");
const beginQuiz = document.getElementById("begin-quiz");
const questionField = document.getElementById("question-field");
const questionText = document.getElementById("question-text");
const answerDiv = document.getElementById("answers");
const feedbackMsg = document.getElementById("feedback-msg");
const countDown = document.getElementById("time");
const resultField = document.getElementById("result-field");
const scoreText = document.getElementById("score-text");
const submitBtn = document.getElementById("submit");
const $tbody = document.getElementById("score-keeper");
const viewHSbtn = document.getElementById("view-highscores");
const scoresField = document.getElementById("highscores-field");

// This variable will be used to retreive each question in our questions object array.
let questionIndex = 0;

//each question has it's text (or qustion), answers, and an answer index.
//answer index will be used to compare user's answer to the correct answer
const questions = [
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      "Kanye West",
      "Leonardo diCaprio",
      "Leonardo da Vinci",
      "None of the above",
    ],
    answerIndex: 2,
  },
  {
    question: "Where did Enchiladas originate from?",
    answers: ["Puerto Rico", "Filibertos", "Afghanistan", "Mexico"],
    answerIndex: 3,
  },
  {
    question: "The sun is a planet.",
    answers: ["True", "False"],
    answerIndex: 1,
  },
  {
    question: "What is the most famous Mexican beer?",
    answers: ["Corona", "Modelo", "Dos Equis"],
    answerIndex: 0,
  },
  {
    question: "What is the name of Apple's virtual assistant?",
    answers: ["Alexa", "Cortana", "Siri", "Lady Gaga"],
    answerIndex: 2,
  },
];

//Following function will access each question using questionIndex, store it inside of currentQuestion, and display it along with the answer buttons (inside of answerDiv) on the page.
function newQuestion() {
  const currentQuestion = questions[questionIndex];

  questionText.textContent = currentQuestion.question;

  //following line resets answerDiv to clear old answer buttons.
  answerDiv.innerHTML = "";

  //following for-loop creates a new button per answer for each question.
  //al answer buttons share similar styling.
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    const answer = currentQuestion.answers[i];
    const answerLI = document.createElement("LI");
    const answerA = document.createElement("A");
    answerA.setAttribute("href", "#");
    answerA.setAttribute("class", "answer-a");
    answerLI.setAttribute("class", "answer-item");
    answerA.textContent = answer;
    answerLI.appendChild(answerA);
    answerDiv.appendChild(answerLI);
  }
}

//once begin button is clicked, timer will start, initial page will disappear and first question will appear using newQuestion() function.
beginBtn.addEventListener("click", function (e) {
  //start timer
  setTime();

  //hide welcome message, and show first question.
  beginQuiz.style.display = "none";
  questionField.style.display = "block";

  //then a new question
  newQuestion();
});

// The user's score is initialized inside of variable finalScore and set to zero.
let finalScore = 0;
answerDiv.addEventListener("click", function (e) {
  e.preventDefault();
  //no action is taken unless the button was clicked.
  if (!e.target.matches("A")) return;

  //store the text contenet of the answer button that user clicked.
  const userAnswer = e.target.textContent;

  //access each question in our questions object array.
  const question = questions[questionIndex];

  //using answerIndex, we define the correct answer per question.
  const correctAnswer = question.answers[question.answerIndex];

  //action is taken per correct and incorrect answer.
  if (userAnswer === correctAnswer) {
    feedbackMsg.textContent = "Correct! ✔️";
    //20 points added to the user's score per correct answer.
    finalScore += 20;
  } else {
    //15 seconds deducted per incorrect answer.
    secondsLeft -= 15;
    feedbackMsg.textContent = "Incorrect! ✖️";
  }

  //iterating to the next questoin in our questions object array.
  questionIndex++;

  // if there are no more questions; alert user that the game is over, end the game and display the result window.
  if (questionIndex < 5) {
    newQuestion();
  } else {
    alert("Game over!");
    displayResults();
  }
});

// viewHSbtn.addEventListener("click", function () {
//   resultField.style.display = "none";
//   scoresField.style.display = "block";
// });

// Get all players and their scores to display in data table.
var playersCount = localStorage.length;
var players = [];

for (let i = 0; i < playersCount; i++) {
  // var position;
  // var initials = Object.keys(localStorage)
  // var scores = Object.values(localStorage)

  var initials = localStorage.key(i)
  var score = localStorage.getItem(initials)

  players[i] = {position: i + 1, initials: initials, score: parseInt(score)};
}

//once submit button is clicked, a pair of (intials, score) is stored inside of localStorage.
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  //store initials input submitted by user to variable initials.
  var playerInitials = document.getElementById("initials-form").value;

  console.log(playerInitials);
  console.log(finalScore);

  localStorage.setItem(playerInitials, finalScore);

  var position;
  players.push({position: players.length + 1, initials: playerInitials, score: finalScore });

  console.log(players);

  //for each player, build a data row with their information
  players.forEach(function (player) {
    


    // $tbody.appendChild(
    //   buildRow({
    //     position: i + 1,
    //     initial: players.initials,
    //     score: players.score,
    //   })
    // );
  });

  //following function builds a new row per player which initials are submitted.
  function buildRow(player) {
    const $tr = document.createElement("tr");
    const $position = document.createElement("td");
    const $initial = document.createElement("td");
    const $score = document.createElement("td");

    $position.textContent = position;
    $initial.textContent = playerInitials;
    $score.textContent = playerScore;

    $tr.appendChild($position, $initial, $score);

    return $tr;
  }
});

//timer used is going to countdown from 60, so a secondsLeft variable is defined.
var secondsLeft = 60;

//timer will count down in seconds.
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    //keeps remaining time in seconds displayed inside of timer div.
    countDown.textContent = secondsLeft;

    if (questionIndex > 4) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//following function will display the user's score
function displayResults() {
  scoreText.textContent = finalScore;
  beginQuiz.style.display = "none";
  questionField.style.display = "none";
  resultField.style.display = "block";
}
