//assigning variables to HTML elements, in order to be called later on in the script. 
const beginBtn = document.getElementById("begin");
const beginQuiz = document.getElementById("begin-quiz");
const questionField = document.getElementById("question-field");
const questionText = document.getElementById("question-text");
const answerDiv = document.getElementById("answers");
const feedbackMsg = document.getElementById("feedback-msg");
const countDown = document.getElementById("time");
const resultField = document.getElementById("result-field")
const score = document.getElementById("score");

let questionIndex = 0;

const questions = [
    {
        question: "Question 1",
        answers: ["True", "False"],
        answerIndex: 0
    },
    {
        question: "Question 2",
        answers: ["True", "False"],
        answerIndex: 0
    }
    // edit previous questions
    // write total of 5 questions. 20 points each. 
]

beginBtn.addEventListener("click", function (e) {
    //start timer
    setTime();

    //hide welcome message, and show first question.
    beginQuiz.style.display = "none";
    questionField.style.display = "block";

    //then a new question
    newQuestion();

});

let finalScore = 0;
answerDiv.addEventListener("click", function (e) {
    e.preventDefault();
    //no action taken if click wasn't on a button. 
    if (!e.target.matches("button")) return;


    const userAnswer = e.target.textContent;

    const question = questions[questionIndex];

    const correctAnswer = question.answers[question.answerIndex];

    if (userAnswer === correctAnswer) {
        feedbackMsg.textContent = "Correct! :)"
        finalScore += 20
    } else {
        feedbackMsg.textContent = "Incorrect! :("
        secondsLeft -= 10;
    }

    questionIndex++;
    // do we need more questions to render??????????????????
    // if not end the game !!!!!!
    if (questionIndex < questions.length) {
        newQuestion();
    } else {
        displayResults();
    }
});

function newQuestion() {
    const currentQuestion = questions[questionIndex];

    questionText.textContent = currentQuestion.question;

    answerDiv.innerHTML = "";

    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const answer = currentQuestion.answers[i];
        const answerBtn = document.createElement("button");
        answerBtn.setAttribute("class", "btn btn-primary");
        answerBtn.textContent = answer;
        answerDiv.appendChild(answerBtn);

    }
}

let secondsLeft = 60;
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        countDown.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function displayResults() {

    alert("Game over!")
    beginQuiz.style.display = "none";
    questionField.style.display = "none";
    resultField.style.display = "block";
    score.textContent = finalScore;
}