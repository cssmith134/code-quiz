var quizBodyEl = document.getElementById("quiz");
var startQuizBtnEl = document.getElementById("startBtn");
var quizAnswerBtnEl = document.querySelector(".btn");
var secondQuestionEl = document.getElementById("next")
var thirdQuestionEl = document.getElementById("next2")
var quizTimer = document.getElementById("timer");

var score = 0;

var quizQuestions = [{
  question: "How many elements can you apply an 'ID' attribute to?",
  choiceA: "As many as you want",
  choiceB: "3",
  choiceC: "1",
  choiceD: "128",
  correctAnswer: "1"
},
{
  question: "What does API stand for?",
  choiceA: "Application Programming Info",
  choiceB: "Application Programming Interface",
  choiceC: "Application Process Interval",
  choiceD: "Application Process Info",
  correctAnswer: "Application Programming Interface"
},
{
  question: "What is used primarily to add structure to a web page?",
  choiceA: "HTML",
  choiceB: "CSS",
  choiceC: "Python",
  choiceD: "React.js",
  correctAnswer: "HTML"
},
{
  question: "What selector is used to target class in CSS",
  choiceA: "#",
  choiceB: "$",
  choiceC: ".",
  choiceD: "&",
  correctAnswer: "."
},
{
  question: "How do you create a variable in Javascript?",
  choiceA: "var",
  choiceB: "$",
  choiceC: "variable",
  choiceD: "Go",
  correctAnswer: "var"
},
{
  question: "What command pushs commit to main branch in terminal?",
  choiceA: "git push main",
  choiceB: "git push to main",
  choiceC: "git push origin main",
  choiceD: "git add main",
  correctAnswer: "git push origin main"
},
{
  question: "What does Math.floor do?",
  choiceA: "Erases a math equation",
  choiceB: "Rounds down a decimal number",
  choiceC: "Creates a random number",
  choiceD: "None of the above",
  correctAnswer: "Rounds down a decimal number"
},
];


var questionNum = 0;

var count = 76;

function startGame(event) {
  $("#start-page").remove();




  setInterval(function () {
    count--;
    1;
    quizTimer.textContent = "Time Left: " + count;
  }, 1000);

  nextQuestion()

};


function nextQuestion(event) {


  if (questionNum < quizQuestions.length) {



    quizBodyEl.innerHTML = "";

    var questionTextEl = document.createElement("div");
    var question = quizQuestions[questionNum].question
    questionTextEl.textContent = question


    quizBodyEl.appendChild(questionTextEl);

    var choiceButtonEl = document.createElement("button");
    choiceButtonEl.type = "button";
    choiceButtonEl.innerHTML = quizQuestions[questionNum].choiceA;
    choiceButtonEl.className = "btn1 btn btn-primary m-2";

    quizBodyEl.appendChild(choiceButtonEl);

    var choiceButtonEl = document.createElement("button");
    choiceButtonEl.type = "button";
    choiceButtonEl.innerHTML = quizQuestions[questionNum].choiceB;
    choiceButtonEl.className = "btn2 btn btn-primary m-2";

    quizBodyEl.appendChild(choiceButtonEl);

    var choiceButtonEl = document.createElement("button");
    choiceButtonEl.type = "button";
    choiceButtonEl.innerHTML = quizQuestions[questionNum].choiceC;
    choiceButtonEl.className = "btn3 btn btn-primary m-2";

    quizBodyEl.appendChild(choiceButtonEl);

    var choiceButtonEl = document.createElement("button");
    choiceButtonEl.type = "button";
    choiceButtonEl.innerHTML = quizQuestions[questionNum].choiceD;
    choiceButtonEl.className = "btn4 btn btn-primary m-2";

    quizBodyEl.appendChild(choiceButtonEl);

    if (quizQuestions[questionNum].choiceA == quizQuestions[questionNum].correctAnswer) {

      $(".btn1").on("click", function () {
        alert("correct")
      });
      $(".btn3").on("click", function () {
        alert("incorrect")
      });
      $(".btn2").on("click", function () {
        alert("incorrect")
      });
      $(".btn4").on("click", function () {
        alert("incorrect")
      });


    } else if (quizQuestions[questionNum].choiceB == quizQuestions[questionNum].correctAnswer) {

      $(".btn1").on("click", function () {
        alert("incorrect")
      });
      $(".btn3").on("click", function () {
        alert("incorrect")
      });
      $(".btn2").on("click", function () {
        alert("correct")
      });
      $(".btn4").on("click", function () {
        alert("incorrect")
      });

    } else if (quizQuestions[questionNum].choiceC == quizQuestions[questionNum].correctAnswer) {

      $(".btn1").on("click", function () {
        alert("incorrect")
      });
      $(".btn3").on("click", function () {
        alert("correct")
      });
      $(".btn2").on("click", function () {
        alert("incorrect")
      });
      $(".btn4").on("click", function () {
        alert("incorrect")
      });

    } else {

      $(".btn1").on("click", function () {
        alert("incorrect")
      });
      $(".btn3").on("click", function () {
        alert("incorrect")
      });
      $(".btn2").on("click", function () {
        alert("incorrect")
      });
      $(".btn4").on("click", function () {
        alert("correct")
      });

    }


    
    questionNum++;

  }
  else {
    displayScore()
  }

  if (score = quizQuestions[questionNum].correctAnswer) {
    score++;
  } 

};

function displayScore() {
  
  alert("you score is ") + score ;

};



secondQuestionEl.addEventListener("click", nextQuestion);
startQuizBtnEl.addEventListener("click", startGame);




