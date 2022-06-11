var body = document.body;
//var to create my question element
var questionAsked = document.createElement("h1");
//var for my start button
var startQuiz = document.querySelector("#start-quiz");
//temporary text content 
questionAsked.textContent = "aodhosaudabdoadad"



//addEvent listener to render first question to the page 
startQuiz.addEventListener("click" , beginTheQuiz)

//function to start the quiz
function beginTheQuiz() {

    body.appendChild(questionAsked);
    
}


//all created element styles
questionAsked.setAttribute("style" , "background:888888")