var body = document.body;

// selecting welcome page elements 
var startQuizBtn = document.querySelector("#start-quiz");
var welcomePageEl = document.querySelector("#welcome-page")
//selecting header / timer elements 
var timerEl = document.querySelector("#timer")
var timerTextEl = document.querySelector("#timer-text")



//addEvent listener to start the quiz
startQuizBtn.addEventListener("click" , beginTheQuiz)



//function to start the quiz
function beginTheQuiz() {


    startTimer()
}

//start timer function
function startTimer() {
    timer = setInterval(function() {


    })
}

