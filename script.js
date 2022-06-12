var questionsEl = [
    {title: "question1 title" , choices: ["option1" , "option2" , "option3" , "option4"] , correctAnswer: "answer1placeholder"} ,
    {title: "question2 title" , choices: ["option1" , "option2" , "option3" , "option4"], correctAnswer: "answer2placeholder"} ,
    {title: "question3 title" , choices: ["option1" , "option2" , "option3" , "option4"] , correctAnswer: "answer3placeholder"} ,
    {title: "question4 title" , choices: ["option1" , "option2" , "option3" , "option4"] , correctAnswer: "answer4placeholder"} ,
    {title: "question5 title" , choices: ["option1" , "option2" , "option3" , "option4"] , correctAnswer: "answer5placeholder"} ,
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
var chosenChoicesEl = document.querySelector("#choices")
var chosenAnswerEl = document.querySelector("#answer");



//addEvent listener to start the quiz
startQuizBtn.addEventListener("click" , function(){
    startTimer();
    renderQuestion();
}) 




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
    chosenAnswerEl.textContent = questionsEl[currentQuestion].choices
}

