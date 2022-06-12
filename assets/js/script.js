// variables for questions in quiz
var questionsEl = [
    {title: "Inside which HTML element do we put the Javascript?" , choices: ["<script>" , "<scripting>" , "<js>" , "<javascript>"] , correctAnswer: "<script>"} ,
    {title: "JavaScript is a ___ -side programming language." , choices: ["client" , "server" , "both" , "none"], correctAnswer: "both"} ,
    {title: "Which JavaScript label catches all the values, except for the ones specified?" , choices: ["catch" , "label" , "try" , "default"] , correctAnswer: "default"} ,
    {title: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?" , choices: ["if(x2)" , "if(x=2)" , "if(x==2)" , "if(x!=2)"] , correctAnswer: "if(x==2"} ,
    {title: "What will the code return? Boolean(3 < 7)" , choices: ["true" , "false" , "Nan" , "SyntaxError"] , correctAnswer: "true"} ,
]



//Variables
var body = document.body;
var currentQuestion = 0;
var currentQuestion1 = 1;
var currentQuestion2 = 2;
var currentQuestion3 = 3;
var currentQuestion4 = 4;
var score = 0;
var timeLeft = 120;
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
        wrongRightEl.textContent = "Right :)";
        removeEventListener
        renderQuestion2()
        
    }, {once :true})

    chosenAnswer1El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG";
        timeLeft -=10
        removeEventListener
        renderQuestion2()
        
    }, {once :true})

    chosenAnswer2El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG";
        timeLeft -=10
        removeEventListener
        renderQuestion2()
        
    }, {once :true})

    chosenAnswer3El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG";
        timeLeft -=10
        removeEventListener
        renderQuestion2()
        
    }, {once :true})
    
}

//function to render second question to page 
function renderQuestion2() {
    chosenQuestionEl.textContent = questionsEl[currentQuestion1].title
    chosenAnswer0El.textContent = questionsEl[currentQuestion1].choices[0]
    chosenAnswer1El.textContent = questionsEl[currentQuestion1].choices[1]
    chosenAnswer2El.textContent = questionsEl[currentQuestion1].choices[2]
    chosenAnswer3El.textContent = questionsEl[currentQuestion1].choices[3]

    chosenAnswer0El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG";
        timeLeft -=10
        removeEventListener
        renderQuestion3()
        ;
    }, {once :true})

    chosenAnswer1El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG";
        timeLeft -=10
        removeEventListener
        renderQuestion3()
        ;
    }, {once :true})

    chosenAnswer2El.addEventListener("click" , function(){
        wrongRightEl.textContent = "RIGHT :)";
        removeEventListener
        renderQuestion3()
        ;
    }, {once :true})

    chosenAnswer3El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG";
        timeLeft -=10
        removeEventListener
        renderQuestion3()
        ;
    }, {once :true})

}

//function to render third question to page
function renderQuestion3() {
    chosenQuestionEl.textContent = questionsEl[currentQuestion2].title
    chosenAnswer0El.textContent = questionsEl[currentQuestion2].choices[0]
    chosenAnswer1El.textContent = questionsEl[currentQuestion2].choices[1]
    chosenAnswer2El.textContent = questionsEl[currentQuestion2].choices[2]
    chosenAnswer3El.textContent = questionsEl[currentQuestion2].choices[3]

    chosenAnswer0El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG";
        timeLeft -=10
        removeEventListener

        renderQuestion4()
    }, {once :true})

    chosenAnswer1El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG";
        timeLeft -=10
        removeEventListener
       
        renderQuestion4()
    }, {once :true})

    chosenAnswer2El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG";
        timeLeft -=10
        removeEventListener
        
        renderQuestion4()
    }, {once :true})

    chosenAnswer3El.addEventListener("click" , function(){
        wrongRightEl.textContent = "RIGHT :)";
        removeEventListener
        renderQuestion4()
    }, {once :true})

}

//function to render fourth question to page
function renderQuestion4() {
    chosenQuestionEl.textContent = questionsEl[currentQuestion3].title
    chosenAnswer0El.textContent = questionsEl[currentQuestion3].choices[0]
    chosenAnswer1El.textContent = questionsEl[currentQuestion3].choices[1]
    chosenAnswer2El.textContent = questionsEl[currentQuestion3].choices[2]
    chosenAnswer3El.textContent = questionsEl[currentQuestion3].choices[3]

    chosenAnswer0El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG";
        timeLeft -=10
        removeEventListener
       
        renderQuestion5()
    }, {once :true})

    chosenAnswer1El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG";
        timeLeft -=10
        removeEventListener

        renderQuestion5()
    }, {once :true})

    chosenAnswer2El.addEventListener("click" , function(){
        wrongRightEl.textContent = "RIGHT :)";
        removeEventListener
        renderQuestion5()
    }, {once :true})

    chosenAnswer3El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG";
        timeLeft -=10
        removeEventListener
       
        renderQuestion5()
    }, {once :true})

}

//function to render fifth question to page
function renderQuestion5() {
    chosenQuestionEl.textContent = questionsEl[currentQuestion4].title
    chosenAnswer0El.textContent = questionsEl[currentQuestion4].choices[0]
    chosenAnswer1El.textContent = questionsEl[currentQuestion4].choices[1]
    chosenAnswer2El.textContent = questionsEl[currentQuestion4].choices[2]
    chosenAnswer3El.textContent = questionsEl[currentQuestion4].choices[3]

    chosenAnswer0El.addEventListener("click" , function(){
        wrongRightEl.textContent = "RIGHT :)";
        removeEventListener
    }, {once :true})

    chosenAnswer1El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG";
        timeLeft -=10
        removeEventListener
       
    }, {once :true})

    chosenAnswer2El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG";
        timeLeft -=10
        removeEventListener
    }, {once :true})

    chosenAnswer3El.addEventListener("click" , function(){
        wrongRightEl.textContent = "WRONG";
        timeLeft -=10
        removeEventListener
       
    }, {once :true})

}



