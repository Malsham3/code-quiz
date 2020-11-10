//assigning variables to HTML elements, in order to be called later on in the script. 
const beginBtn = document.getElementById("begin");
const beginQuiz = document.getElementById("begin-quiz");
const questionField = document.getElementById("question-field");
const questionText = document.getElementById("question-text");
const answerDiv = document.getElementById("answers");

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
    // write more questions. 
]

beginBtn.addEventListener("click", function (e){
    //start timer 

    beginQuiz.style.display = "none";
    questionField.style.display = "block";

    //then a new question
    newQuestion();

});

answerDiv.addEventListener("click", function(e) {
    e.preventDefault();

    //no action taken if click wasn't on a button. 
    if (!e.target.matches("button")) return;

    const userAnswer = e.target.textContent;

    const question = questions(questionIndex);

    const correctAnswer = question.answers[question.answerIndex];

    if (userAnswer === correctAnswer) {
        //that was correct
    } else {
        //that was incorrect
    }

    questionIndexx++;

    newQuestion();
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