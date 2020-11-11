//assigning variables to HTML elements, in order to be called later on in the script. 
const beginBtn = document.getElementById("begin");
const beginQuiz = document.getElementById("begin-quiz");
const questionField = document.getElementById("question-field");
const questionText = document.getElementById("question-text");
const answerDiv = document.getElementById("answers");
const feedbackMsg = document.getElementById("feedback-msg");
const countDown = document.getElementById("time");
const resultField = document.getElementById("result-field")
const scoreText = document.getElementById("score-text");
const submitBtn = document.getElementById("submit");
const highScoresField = document.getElementById("score-keeper")

let questionIndex = 0;

const questions = [
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Kanye West", "Leonardo diCaprio", "Leonardo da Vinci", "None of the above"],
        answerIndex: 2
    },
    {
        question: "Where did Enchiladas originate from?",
        answers: ["Puerto Rico", "Filibertos", "Afghanistan", "Mexico"],
        answerIndex: 3
    },
    {
        question: "The sun is a planet.",
        answers: ["True", "False"],
        answerIndex: 1
    }, {
        question: "What is the most famous Mexican beer?",
        answers: ["Corona", "Modelo", "Dos Equis"],
        answerIndex: 0
    }, {
        question: "What is the name of Apple's virtual assistant?",
        answers: ["Alexa", "Cortana", "Siri", "Lady Gaga"],
        answerIndex: 2
    }

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


submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var initials = document.getElementById("initials-form").value;
    //get initials
    var score = finalScore;
    localStorage.setItem(initials, score);

    //this for-loop is going to create a new row for each time initials submitted to keep scores data.
    for (let i = 0; i < localStorage.length; i++) {
        const answer = currentQuestion.answers[i];
        const answerBtn = document.createElement("button");
        answerBtn.setAttribute("class", "btn btn-primary mx-1");
        answerBtn.textContent = answer;
        answerDiv.appendChild(answerBtn);

    }
})

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
        secondsLeft -= 10;
        feedbackMsg.textContent = "Incorrect! :("
    }

    questionIndex++;
    //  need more questions to render??
    // if not end the game !
    if (questionIndex < questions.length) {
        newQuestion();
    } else {
        alert("Game over!")
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
        answerBtn.setAttribute("class", "btn btn-primary mx-1");
        answerBtn.textContent = answer;
        answerDiv.appendChild(answerBtn);

    }
}

var secondsLeft = 60;
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        countDown.textContent = secondsLeft;

        if (secondsLeft === 0 || (questionIndex === questions.length)) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function displayResults() {
    scoreText.textContent = finalScore;
    beginQuiz.style.display = "none";
    questionField.style.display = "none";
    resultField.style.display = "block";
}




//HTML: add a form that asks for initials, in JS, add event listener that saves input
//ask to get initials and use saveInfo to save