var questionsEl = [
    {title: "question1 title" , choices: "choices1 placeholder" , correctAnswer: "answer1placeholder"} ,
    {title: "question2 title" , choices: "choices2 placeholder" , correctAnswer: "answer2placeholder"} ,
    {title: "question3 title" , choices: "choices3 placeholder" , correctAnswer: "answer3placeholder"} ,
    {title: "question4 title" , choices: "choices4 placeholder" , correctAnswer: "answer4placeholder"} ,
    {title: "question5 title" , choices: "choices5 placeholder" , correctAnswer: "answer5placeholder"} ,
]



//Variables
var body = document.body;
var currentQuestion = 0

// selecting welcome page elements 
var startQuizBtn = document.querySelector("#start-quiz");
var welcomePageEl = document.querySelector("#welcome-page")
//selecting header / timer elements 
var timerEl = document.querySelector("#timer")
var timerTextEl = document.querySelector("#timer-text")
//Selecting quiz elements 
var chosenQuestionEl = document.querySelector("#question");
var chosenAnswerEl = document.querySelector("#answer");



//addEvent listener to start the quiz
startQuizBtn.addEventListener("click" , beginTheQuiz)



//function to start the quiz
function beginTheQuiz() {


    startTimer();
    renderQuestion();
}

//start timer function
function startTimer() {
   
   var timeLeft = 60;
    
   var timer = setInterval(function() {
        
        if (timeLeft > 1) {
            timerTextEl.textContent = timeLeft 
            timeLeft--;
        }
    }, 1000);
}

// function to render first question to the page
function renderQuestion() {

    chosenQuestionEl.textContent = questionsEl[currentQuestion].title
    
    for (let i = 0; i <chosenAnswerEl; i++) {
        chosenAnswerEl.children[i].children[0].textContent =`${(i + 1)}: ${questionsEl[currentQuestion].choices[i]}`;

    }
}

