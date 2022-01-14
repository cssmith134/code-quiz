var quizBodyEl = document.getElementById("quiz");
var quizChoice1El = document.getElementById("choice1")
var quizChoice1El = document.getElementById("choice2")
var quizChoice1El = document.getElementById("choice3")
var quizChoice1El = document.getElementById("choice4")
var startQuizBtnEl = document.getElementById("startBtn");
var quizAnswerBtnEl = document.querySelector(".btn");
var secondQuestionEl = document.getElementById("next")
var thirdQuestionEl = document.getElementById("next2")

function startGame (event) {
  $("#start-page").remove();
 
  var questionTextEl = document.createElement("div");
  var question = quizQuestions[0].question
  questionTextEl.textContent = question
  

  quizBodyEl.appendChild(questionTextEl);
  
  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.type = "button";
  choiceButtonEl.innerHTML = quizQuestions[0].choiceA;
  choiceButtonEl.className = "btn1 btn btn-primary m-2";

  quizBodyEl.appendChild(choiceButtonEl);

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.type = "button";
  choiceButtonEl.innerHTML = quizQuestions[0].choiceB;
  choiceButtonEl.className = "btn2 btn btn-primary m-2";

  quizBodyEl.appendChild(choiceButtonEl);

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.type = "button";
  choiceButtonEl.innerHTML = quizQuestions[0].choiceC;
  choiceButtonEl.className = "btn3 btn btn-primary m-2";

  quizBodyEl.appendChild(choiceButtonEl);

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.type = "button";
  choiceButtonEl.innerHTML = quizQuestions[0].choiceD;
  choiceButtonEl.className = "btn4 btn btn-primary m-2";

  quizBodyEl.appendChild(choiceButtonEl);
  $(".btn1").on("click", function() { alert("incorrect")});
  $(".btn3").on("click", function() { alert("correct")});
  $(".btn2").on("click", function() { alert("incorrect")});
  $(".btn4").on("click", function() { alert("incorrect")});

};


function secondQuestion (event) {
  $("#quiz").remove();
  var questionTextEl = document.createElement("div");
  var question = quizQuestions[1].question
  questionTextEl.textContent = question
  

  secondQuestionEl.appendChild(questionTextEl);
 
  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.type = "button";
  choiceButtonEl.innerHTML = quizQuestions[1].choiceA;
  choiceButtonEl.className = "btn1 btn btn-primary m-2";

  secondQuestionEl.appendChild(choiceButtonEl);

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.type = "button";
  choiceButtonEl.innerHTML = quizQuestions[1].choiceB;
  choiceButtonEl.className = "btn2 btn btn-primary m-2";

  secondQuestionEl.appendChild(choiceButtonEl);

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.type = "button";
  choiceButtonEl.innerHTML = quizQuestions[1].choiceC;
  choiceButtonEl.className = "btn3 btn btn-primary m-2";

  secondQuestionEl.appendChild(choiceButtonEl);

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.type = "button";
  choiceButtonEl.innerHTML = quizQuestions[1].choiceD;
  choiceButtonEl.className = "btn4 btn btn-primary m-2";

  secondQuestionEl.appendChild(choiceButtonEl);
  $(".btn1").on("click", function() { alert("incorrect")});
  $(".btn2").on("click", function() { alert("correct")});
  $(".btn3").on("click", function() { alert("incorrect")});
  $(".btn4").on("click", function() { alert("incorrect")});
}

function thirdQuestion (event) {
  var questionTextEl = document.createElement("div");
  var question = quizQuestions[2].question
  questionTextEl.textContent = question
  

  thirdQuestionEl.appendChild(questionTextEl);
 
  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.type = "button";
  choiceButtonEl.innerHTML = quizQuestions[2].choiceA;
  choiceButtonEl.className = "btn1 btn btn-primary m-2";

  thirdQuestionEl.appendChild(choiceButtonEl);

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.type = "button";
  choiceButtonEl.innerHTML = quizQuestions[2].choiceB;
  choiceButtonEl.className = "btn2 btn btn-primary m-2";

  thirdQuestionEl.appendChild(choiceButtonEl);

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.type = "button";
  choiceButtonEl.innerHTML = quizQuestions[2].choiceC;
  choiceButtonEl.className = "btn3 btn btn-primary m-2";

  thirdQuestionEl.appendChild(choiceButtonEl);

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.type = "button";
  choiceButtonEl.innerHTML = quizQuestions[2].choiceD;
  choiceButtonEl.className = "btn4 btn btn-primary m-2";

  thirdQuestionEl.appendChild(choiceButtonEl);
  $(".btn1").on("click", function() { alert("incorrect")});
  $(".btn2").on("click", function() { alert("correct")});
  $(".btn3").on("click", function() { alert("incorrect")});
  $(".btn4").on("click", function() { alert("incorrect")});
}

secondQuestionEl.addEventListener("click", secondQuestion);
startQuizBtnEl.addEventListener("click", startGame);
thirdQuestionEl.addEventListener("click", thirdQuestion);
  
 


var quizQuestions = [{
    question: "How many elements can you apply an 'ID' attribute to?",
    choiceA: "As many as you want",
    choiceB: "3",
    choiceC: "1",
    choiceD: "128",
    correctAnswer: "1"},
  {
    question: "What does API stand for?",
    choiceA: "Application Programming Info",
    choiceB: "Application Programming Interface",
    choiceC: "Application Process Interval",
    choiceD: "Application Process Info",
    correctAnswer: "Application Programming Interface"},
   {
    question: "What is used primarily to add structure to a web page?",
    choiceA: "HTML",
    choiceB: "CSS",
    choiceC: "Python",
    choiceD: "React.js",
    correctAnswer: "HTML"},
    {
    question: "What selector is used to target class in CSS",
    choiceA: "#",
    choiceB: "$",
    choiceC: ".",
    choiceD: "&",
    correctAnswer: "."},
    {
    question: "How do you create a variable in Javascript?",
    choiceA: "var",
    choiceB: "$",
    choiceC: "variable",
    choiceD: "Go",
    correctAnswer: "var"},  
    {
    question: "What command pushs commit to main branch in terminal?",
    choiceA: "git push main",
    choiceB: "git push to main",
    choiceC: "git push origin main",
    choiceD: "git add main",
    correctAnswer: "git push origin main"},
    {
    question: "What does Math.floor do?",
    choiceA: "Erases a math equation",
    choiceB: "Rounds down a decimal number",
    choiceC: "Creates a random number",
    choiceD: "None of the above",
    correctAnswer: "Rounds down a decimal number"},
];