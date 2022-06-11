var body = document.body;
//array for questions
var questionsArray = ["question 1 placeholder" , "question 2 placeholder" , "question 3 placeholder" , "question 4 placeholder" , "question 5 placeholder"];
//var to create my question element
var questionAsked = document.createElement("h1");
//var for my start button
var startQuiz = document.querySelector("#start-quiz");




//addEvent listener to render first question to the page 
startQuiz.addEventListener("click" , beginTheQuiz)

//function to start the quiz
function beginTheQuiz(array) {

    var randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    body.append(randomQuestion);

    
}


//all created element styles
questionAsked.setAttribute("style" , "background:888888")