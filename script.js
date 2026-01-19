const questions = [
  {
    question: "Which language is used for structuring web pages?",
    options: ["CSS", "HTML", "JavaScript", "Python"],
    answer: "HTML"
  },
  {
    question: "Which company developed the React library?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    answer: "Facebook"
  },
  {
    question: "What is the default position value of an HTML element?",
    options: ["relative", "absolute", "fixed", "static"],
    answer: "static"
  },
  {
    question: "Which JS keyword declares variables?",
    options: ["var", "let", "const", "All of these"],
    answer: "All of these"
  }
];

let questionELM = document.getElementById("questions");
let answersbtn = document.getElementById("answers-btn");
let next = document.getElementById("next-btn");
let buttons = document.getElementsByClassName("btn");

let currentquestion = 0;
let score = 0;
let selectedOption = null;

function startQuiz() {
  currentquestion = 0;
  score = 0;
  next.innerHTML = "Next";
  showquestion();
}
function showquestion() {
  let quesnumber = currentquestion + 1;
  questionELM.innerText =
    quesnumber + "." + questions[currentquestion].question;

  let options = questions[currentquestion].options;
  let correctAnswer = questions[currentquestion].answer;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = options[i];
    buttons[i].disabled = false;
    buttons[i].style.backgroundColor = "";
    buttons[i].style.color = "";

    buttons[i].onclick = function () {
      selectedOption = this.innerText;

      for (let btn of buttons) {
        btn.disabled = true;

        if (btn.innerText === correctAnswer) {
          btn.style.backgroundColor = "green";
          btn.style.color = "white";
        }

        if (
          btn === this &&
          this.innerText !== correctAnswer
        ) {
          btn.style.backgroundColor = "red";
          btn.style.color = "white";
        }
      }

      next.style.display = "block";
    };
  }
}


next.onclick = function () {
  if (next.innerHTML == "Restart") {
    resetQuiz();
    return;
  }
  if (selectedOption === questions[currentquestion].answer) {
    score++;

  }
  currentquestion++;
  selectedOption = null;
  next.style.display = "none";
  if (currentquestion < questions.length) {
    showquestion();
  } else {
    questionELM.innerText = " You scored " + score + " out of " + questions.length + " !";

    answersbtn.style.display = "none";
    next.innerHTML = "Restart";

    next.style.display = "block";
  }
}
function resetQuiz() {
  currentquestion = 0;
  score = 0;
  selectedOption = null;
  next.innerHTML = "Next";
  next.style.display = "none";
  answersbtn.style.display = "block";
  showquestion();
}
startQuiz();



