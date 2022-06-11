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
   
   var timeLeft = 60;
    
   var timer = setInterval(function() {
        
        if (timeLeft > 1) {
            timerTextEl.textContent = timeLeft 
            timeLeft--;
        }
    }, 1000);
}

