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
//Selecting 1st quiz page elements  
var firstquestionPageEl = document.querySelector("#firstquestion-page")
var firstchosenQuestionEl = document.querySelector("#firstquestion");
var firstchosenChoicesEl = document.querySelector("#firstchoices")
var firstchosenAnswer0El = document.querySelector("#firstanswer0");
var firstchosenAnswer1El = document.querySelector("#firstanswer1");
var firstchosenAnswer2El = document.querySelector("#firstanswer2");
var firstchosenAnswer3El = document.querySelector("#firstanswer3");
var firstwrongRightEl = document.querySelector("#firstwrong-right")
//Selecting 2nd quiz page elements 
var secondquestionPageEl = document.querySelector("#secondquestion-page")
var secondchosenQuestionEl = document.querySelector("#secondquestion");
var secondchosenChoicesEl = document.querySelector("#secondchoices")
var secondchosenAnswer0El = document.querySelector("#secondanswer0");
var secondchosenAnswer1El = document.querySelector("#secondanswer1");
var secondchosenAnswer2El = document.querySelector("#secondanswer2");
var secondchosenAnswer3El = document.querySelector("#secondanswer3");
var secondwrongRightEl = document.querySelector("#secondwrong-right")
//Selecting 3rd quiz page elements
var thirdquestionPageEl = document.querySelector("#thirdquestion-page")
var thirdchosenQuestionEl = document.querySelector("#thirdquestion");
var thirdchosenChoicesEl = document.querySelector("#thirdchoices")
var thirdchosenAnswer0El = document.querySelector("#thirdanswer0");
var thirdchosenAnswer1El = document.querySelector("#thirdanswer1");
var thirdchosenAnswer2El = document.querySelector("#thirdanswer2");
var thirdchosenAnswer3El = document.querySelector("#thirdanswer3");
var thirdwrongRightEl = document.querySelector("#thirdwrong-right")
//Selecting 4th quiz page elements
var fourthquestionPageEl = document.querySelector("#fourthquestion-page")
var fourthchosenQuestionEl = document.querySelector("#fourthquestion");
var fourthchosenChoicesEl = document.querySelector("#fourthchoices")
var fourthchosenAnswer0El = document.querySelector("#fourthanswer0");
var fourthchosenAnswer1El = document.querySelector("#fourthanswer1");
var fourthchosenAnswer2El = document.querySelector("#fourthanswer2");
var fourthchosenAnswer3El = document.querySelector("#fourthanswer3");
var fourthwrongRightEl = document.querySelector("#fourthwrong-right")
//Selecting 5th quiz page elements
var fifthquestionPageEl = document.querySelector("#fifthquestion-page")
var fifthchosenQuestionEl = document.querySelector("#fifthquestion");
var fifthchosenChoicesEl = document.querySelector("#fifthchoices")
var fifthchosenAnswer0El = document.querySelector("#fifthanswer0");
var fifthchosenAnswer1El = document.querySelector("#fifthanswer1");
var fifthchosenAnswer2El = document.querySelector("#fifthanswer2");
var fifthchosenAnswer3El = document.querySelector("#fifthanswer3");
var fifthwrongRightEl = document.querySelector("#fifthwrong-right");

firstquestionPageEl.style.display = "none";
secondquestionPageEl.style.display = "none";
thirdquestionPageEl.style.display = "none";
fourthquestionPageEl.style.display = "none";
fifthquestionPageEl.style.display = "none";

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

    firstquestionPageEl.style.display = "block";

    firstchosenQuestionEl.textContent = questionsEl[currentQuestion].title
    firstchosenAnswer0El.textContent = questionsEl[currentQuestion].choices[0]
    firstchosenAnswer1El.textContent = questionsEl[currentQuestion].choices[1]
    firstchosenAnswer2El.textContent = questionsEl[currentQuestion].choices[2]
    firstchosenAnswer3El.textContent = questionsEl[currentQuestion].choices[3]

    firstchosenAnswer0El.addEventListener("click" , function(){
        firstwrongRightEl.textContent = "Right :)";
        score += 5;
        removeEventListener;
        renderQuestion2()
        
    }, {once :true})

    firstchosenAnswer1El.addEventListener("click" , function(){
        firstwrongRightEl.textContent = "WRONG";
        timeLeft -=10;
        removeEventListener;
        renderQuestion2()
        
    }, {once :true})

    firstchosenAnswer2El.addEventListener("click" , function(){
        firstwrongRightEl.textContent = "WRONG";
        timeLeft -=10;
        removeEventListener;
        renderQuestion2()
        
    }, {once :true})

    firstchosenAnswer3El.addEventListener("click" , function(){
        firstwrongRightEl.textContent = "WRONG";
        timeLeft -=10;
        removeEventListener;
        renderQuestion2()
        
    }, {once :true})
    
}

//function to render second question to page 
function renderQuestion2() {

    secondquestionPageEl.style.display = "block";

    firstchosenQuestionEl.style.display = "none";
    firstchosenAnswer0El.style.display = "none";
    firstchosenAnswer1El.style.display = "none";
    firstchosenAnswer2El.style.display = "none";
    firstchosenAnswer3El.style.display = "none";

    secondchosenQuestionEl.textContent = questionsEl[currentQuestion1].title
    secondchosenAnswer0El.textContent = questionsEl[currentQuestion1].choices[0]
    secondchosenAnswer1El.textContent = questionsEl[currentQuestion1].choices[1]
    secondchosenAnswer2El.textContent = questionsEl[currentQuestion1].choices[2]
    secondchosenAnswer3El.textContent = questionsEl[currentQuestion1].choices[3]

    secondchosenAnswer0El.addEventListener("click" , function(){
        secondwrongRightEl.textContent = "WRONG";
        timeLeft -=10;
        removeEventListener;
        renderQuestion3()
        ;
    }, {once :true})

    secondchosenAnswer1El.addEventListener("click" , function(){
        secondwrongRightEl.textContent = "WRONG";
        timeLeft -=10;
        removeEventListener;
        renderQuestion3();
    }, {once :true})

    secondchosenAnswer2El.addEventListener("click" , function(){
        secondwrongRightEl.textContent = "RIGHT :)";
        score += 5;
        removeEventListener;
        renderQuestion3()
        ;
    }, {once :true})

    secondchosenAnswer3El.addEventListener("click" , function(){
        secondwrongRightEl.textContent = "WRONG";
        timeLeft -=10;
        removeEventListener;
        renderQuestion3()
        ;
    }, {once :true})

}

//function to render third question to page
function renderQuestion3() {

    thirdquestionPageEl.style.display = "block";

    firstwrongRightEl.style.display = "none";
    secondchosenQuestionEl.style.display = "none";
    secondchosenAnswer0El.style.display = "none";
    secondchosenAnswer1El.style.display = "none";
    secondchosenAnswer2El.style.display = "none";
    secondchosenAnswer3El.style.display = "none";

    thirdchosenQuestionEl.textContent = questionsEl[currentQuestion2].title
    thirdchosenAnswer0El.textContent = questionsEl[currentQuestion2].choices[0]
    thirdchosenAnswer1El.textContent = questionsEl[currentQuestion2].choices[1]
    thirdchosenAnswer2El.textContent = questionsEl[currentQuestion2].choices[2]
    thirdchosenAnswer3El.textContent = questionsEl[currentQuestion2].choices[3]

    thirdchosenAnswer0El.addEventListener("click" , function(){
        thirdwrongRightEl.textContent = "WRONG";
        timeLeft -=10;
        removeEventListener;

        renderQuestion4()
    }, {once :true})

    thirdchosenAnswer1El.addEventListener("click" , function(){
        thirdwrongRightEl.textContent = "WRONG";
        timeLeft -=10;
        removeEventListener;
       
        renderQuestion4()
    }, {once :true})

    thirdchosenAnswer2El.addEventListener("click" , function(){
        thirdwrongRightEl.textContent = "WRONG";
        timeLeft -=10;
        removeEventListener;
        
        renderQuestion4()
    }, {once :true})

    thirdchosenAnswer3El.addEventListener("click" , function(){
        thirdwrongRightEl.textContent = "RIGHT :)";
        score += 5;
        removeEventListener;
        renderQuestion4()
    }, {once :true})

}

//function to render fourth question to page
function renderQuestion4() {

    fourthquestionPageEl.style.display = "block";

    secondwrongRightEl.style.display = "none";
    thirdchosenQuestionEl.style.display = "none";
    thirdchosenAnswer0El.style.display = "none";
    thirdchosenAnswer1El.style.display = "none";
    thirdchosenAnswer2El.style.display = "none";
    thirdchosenAnswer3El.style.display = "none";

    fourthchosenQuestionEl.textContent = questionsEl[currentQuestion3].title
    fourthchosenAnswer0El.textContent = questionsEl[currentQuestion3].choices[0]
    fourthchosenAnswer1El.textContent = questionsEl[currentQuestion3].choices[1]
    fourthchosenAnswer2El.textContent = questionsEl[currentQuestion3].choices[2]
    fourthchosenAnswer3El.textContent = questionsEl[currentQuestion3].choices[3]

    fourthchosenAnswer0El.addEventListener("click" , function(){
        fourthwrongRightEl.textContent = "WRONG";
        timeLeft -=10;
        removeEventListener;
       
        renderQuestion5()
    }, {once :true})

    fourthchosenAnswer1El.addEventListener("click" , function(){
        fourthwrongRightEl.textContent = "WRONG";
        timeLeft -=10;
        removeEventListener;

        renderQuestion5()
    }, {once :true})

    fourthchosenAnswer2El.addEventListener("click" , function(){
        fourthwrongRightEl.textContent = "RIGHT :)";
        score += 5;
        removeEventListener;
        renderQuestion5();
    }, {once :true})

    fourthchosenAnswer3El.addEventListener("click" , function(){
        fourthwrongRightEl.textContent = "WRONG";
        timeLeft -=10;
        removeEventListener;
       
        renderQuestion5()
    }, {once :true})

}

//function to render fifth question to page
function renderQuestion5() {

    fifthquestionPageEl.style.display = "block";

    thirdwrongRightEl.style.display = "none";
    fourthchosenQuestionEl.style.display = "none";
    fourthchosenAnswer0El.style.display = "none";
    fourthchosenAnswer1El.style.display = "none";
    fourthchosenAnswer2El.style.display = "none";
    fourthchosenAnswer3El.style.display = "none";

    fifthchosenQuestionEl.textContent = questionsEl[currentQuestion4].title
    fifthchosenAnswer0El.textContent = questionsEl[currentQuestion4].choices[0]
    fifthchosenAnswer1El.textContent = questionsEl[currentQuestion4].choices[1]
    fifthchosenAnswer2El.textContent = questionsEl[currentQuestion4].choices[2]
    fifthchosenAnswer3El.textContent = questionsEl[currentQuestion4].choices[3]

    fifthchosenAnswer0El.addEventListener("click" , function(){
        fifthwrongRightEl.textContent = "RIGHT :)";
        score += 5;
        console.log(score);
        removeEventListener;
    }, {once :true})

    fifthchosenAnswer1El.addEventListener("click" , function(){
        fifthwrongRightEl.textContent = "WRONG";
        timeLeft -=10;
        removeEventListener;
       
    }, {once :true})

    fifthchosenAnswer2El.addEventListener("click" , function(){
        fifthwrongRightEl.textContent = "WRONG";
        timeLeft -=10;
        removeEventListener;
    }, {once :true})

    fifthchosenAnswer3El.addEventListener("click" , function(){
        fifthwrongRightEl.textContent = "WRONG";
        timeLeft -=10;
        removeEventListener;
       
    }, {once :true})

}



