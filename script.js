const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [{
    question: "What does JSON stand for?",
    answers: {
        a: "Javascript Object Notation",
        b: "Java Scan Observer Node",
        c: "Javascript SVG One NaN",
        d: "Java Sugar On Nice"
    },
    correctAnswer: "a"
},
    {
        question: "Which one of these can style HTML?",
        answers: {
            a: "Node.js",
            b: "JSON",
            c: "CSS",
            d: "API" 
        },
        correctAnswer:  "c"

    },
    {
        question: "What does git pull do in the terminal?",
        answers: {
            a: "resets computer",
            b: "creates new account on Github",
            c: "pulls code from Github",
            d: "updates new code Github"
        }
    }
];

function buildQuiz(){
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}>
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
        }
    )
}

function showResults(){}

buildQuiz();

submitButton.addEventListener('click', showResults);