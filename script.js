const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
let index = 0;

const myQuestions = [{
    question: "What does JSON stand for?",
    answers: [
        "Javascript Object Notation",
        "Java Scan Observer Node",
        "Javascript SVG One NaN",
        "Java Sugar On Nice"
    ],
    correctAnswer: "Javascript Object Notationa"
},
{
    question: "Which one of these can style HTML?",
    answers: [
        "Node.js",
        "JSON",
        "CSS",
        "API"
    ],
    correctAnswer: "CSS"

},
{
    question: "What does git pull do in the terminal?",
    answers: [
        "resets computer",
        "creates new account on Github",
        "pulls code from Github",
        "updates new code Github"
    ],
    correctAnswer: "pulls code from Github"
}
];

function buildQuiz() {
    //const output = [];
    var questionTitle = document.createElement('h2');
    questionTitle.textContent = myQuestions[index].question;
    quizContainer.append(questionTitle)

    console.log("answer array: ", myQuestions[index].answers)

    myQuestions[index].answers.forEach(
        function(answer){
            var answerElement = document.createElement('button');
            answerElement.textContent = answer;
            answerElement.onclick = checker;
            quizContainer.append(answerElement);

        })



}
console.dir(window.document);

function checker() {
// use the proptery this
if (this.innerText ===myQuestions[index].correctAnswer) {
    
}
}

function showResults() { }

buildQuiz();

submitButton.addEventListener('click', showResults);


// Create variables to store the quiz questions

// Use mouse-click events to start the quiz

// Write for loops to cycle through quiz questions

// Use key-press events to receive user input in the form of answers to quiz questions

// Create a time limit for the game using time functions

// Write conditional statements to determine wrong and right answers

// Use client-side storage to store high scores

// Use GitHub Pages to publish the page to the web