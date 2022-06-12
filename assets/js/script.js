var questionsEl = [
    {title: "question1 title" , choices: ["option1" , "option2" , "option3" , "option4"] , correctAnswer: "answer1placeholder"} ,
    {title: "question2 title" , choices: ["option1" , "option2" , "option3" , "option4"], correctAnswer: "answer2placeholder"} ,
    {title: "question3 title" , choices: ["option1" , "option2" , "option3" , "option4"] , correctAnswer: "answer3placeholder"} ,
    {title: "question4 title" , choices: ["option1" , "option2" , "option3" , "option4"] , correctAnswer: "answer4placeholder"} ,
    {title: "question5 title" , choices: ["option1" , "option2" , "option3" , "option4"] , correctAnswer: "answer5placeholder"} ,
]



//Variables
var body = document.body;
var currentQuestion = 0;
var currentQuestion1 = 1;
var currentQuestion2 = 2;
var currentQuestion3 = 3;
var currentQuestion4 = 4;
// selecting welcome page elements 
var startQuizBtn = document.querySelector("#start-quiz");
var welcomePageEl = document.querySelector("#welcome-page")
//selecting header / timer elements 
var timerEl = document.querySelector("#timer")
var timerTextEl = document.querySelector("#timer-text")
//Selecting quiz elements 
var chosenQuestionEl = document.querySelector("#question");
var chosenChoicesEl = document.querySelector("#choices")
var chosenAnswer0El = document.querySelector("#answer0");
var chosenAnswer1El = document.querySelector("#answer1");
var chosenAnswer2El = document.querySelector("#answer2");
var chosenAnswer3El = document.querySelector("#answer3");
var wrongRightEl = document.querySelector("#wrong-right")


//addEvent listener to start the quiz
startQuizBtn.addEventListener("click" , function(){

    welcomePageEl.style.display = "none";

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
    chosenAnswer0El.textContent = questionsEl[currentQuestion].choices[0]
    chosenAnswer1El.textContent = questionsEl[currentQuestion].choices[1]
    chosenAnswer2El.textContent = questionsEl[currentQuestion].choices[2]
    chosenAnswer3El.textContent = questionsEl[currentQuestion].choices[3]

    chosenAnswer0El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion2()
    })

    chosenAnswer1El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion2()
    })

    chosenAnswer2El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion2()
    })

    chosenAnswer3El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion2()
    })

}

//function to render second question to page 
function renderQuestion2() {
    chosenQuestionEl.textContent = questionsEl[currentQuestion1].title
    chosenAnswer0El.textContent = questionsEl[currentQuestion1].choices[0]
    chosenAnswer1El.textContent = questionsEl[currentQuestion1].choices[1]
    chosenAnswer2El.textContent = questionsEl[currentQuestion1].choices[2]
    chosenAnswer3El.textContent = questionsEl[currentQuestion1].choices[3]

    chosenAnswer0El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion3()
    })

    chosenAnswer1El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion3()
    })

    chosenAnswer2El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion3()
    })

    chosenAnswer3El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion3()
    })

}

//function to render third question to page
function renderQuestion3() {
    chosenQuestionEl.textContent = questionsEl[currentQuestion2].title
    chosenAnswer0El.textContent = questionsEl[currentQuestion2].choices[0]
    chosenAnswer1El.textContent = questionsEl[currentQuestion2].choices[1]
    chosenAnswer2El.textContent = questionsEl[currentQuestion2].choices[2]
    chosenAnswer3El.textContent = questionsEl[currentQuestion2].choices[3]

    chosenAnswer0El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion4()
    })

    chosenAnswer1El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion4()
    })

    chosenAnswer2El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion4()
    })

    chosenAnswer3El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion4()
    })

}

//function to render fourth question to page
function renderQuestion4() {
    chosenQuestionEl.textContent = questionsEl[currentQuestion3].title
    chosenAnswer0El.textContent = questionsEl[currentQuestion3].choices[0]
    chosenAnswer1El.textContent = questionsEl[currentQuestion3].choices[1]
    chosenAnswer2El.textContent = questionsEl[currentQuestion3].choices[2]
    chosenAnswer3El.textContent = questionsEl[currentQuestion3].choices[3]

    chosenAnswer0El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion5()
    })

    chosenAnswer1El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion5()
    })

    chosenAnswer2El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion5()
    })

    chosenAnswer3El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
        renderQuestion5()
    })

}

//function to render fifth question to page
function renderQuestion5() {
    chosenQuestionEl.textContent = questionsEl[currentQuestion4].title
    chosenAnswer0El.textContent = questionsEl[currentQuestion4].choices[0]
    chosenAnswer1El.textContent = questionsEl[currentQuestion4].choices[1]
    chosenAnswer2El.textContent = questionsEl[currentQuestion4].choices[2]
    chosenAnswer3El.textContent = questionsEl[currentQuestion4].choices[3]

    chosenAnswer0El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
    })

    chosenAnswer1El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
    })

    chosenAnswer2El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
    })

    chosenAnswer3El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG"
    })

}


