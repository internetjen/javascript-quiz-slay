const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const rulesContainer = document.getElementById('rules-container')
const questionContainer = document.getElementById('question-container')
const doneContainer = document.getElementById('done-container')
const timerContainer = document.getElementById('timer-container')
const choiceButton = document.getElementById('choices-buttons')
const getQuestions = document.getElementById('question')
const getStarted = document.getElementById('welcome')
const finalResults = document.getElementById('show-results')
const choiceA = document.getElementById('a')
const choiceB = document.getElementById('b')
const choiceC = document.getElementById('c')
const choiceD = document.getElementById('d')

startButton.addEventListener('click', startQuiz)

//All quiz questions
let quizQuestions = [
	{
		question: 'What is the correct JavaScript syntax to change the content of this HTML element: <p id="demo"> This is a demonstration.',
		answers: {
			a: 'document.getElementById("demo").innerHTML = "Hello World!',
			b: '#demo.innerHTML = "Hello World!"',
			c: 'document.getElement("p").innerHTML = "Hello World!',
            d: 'document.getElementByName("p").innerHTML = "Hello World!'
        },
		correctAnswer: 'a'
	},
	{
		question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
		answers: {
			a: '<script src="xxx.js">',
			b: '<script name="xxx.js">',
			c: '<script href="xxx.js">',
            d: '<href script="xxx.js">'
		},
		correctAnswer: 'a'
	},
    {
		question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
		answers: {
			a: 'Javascript',
			b: 'console.log',
            c: 'Terminal/bash',
            d: 'For loops'
		},
		correctAnswer: 'b'
	},
    {
		question: 'How do you write "Hello World" in an alert box?',
		answers: {
			a: 'msgBox("Hello World")',
			b: 'msg("Hello World")',
			c: 'alert("Hello World")',
            d: 'alertBox("Hello World")'
		},
		correctAnswer: 'c'
	},
    {
		question: 'How do you create a function in JavaScript?',
		answers: {
			a: 'function:myFunction()',
			b: 'function myFunction()',
			c: 'function = myFunction()',
            d: 'function = MyFunction()'
		},
		correctAnswer: 'b'
	},
    {
		question: 'String values must be enclosed within ______ when being assigned to variables.',
		answers: {
			a: 'Quotes',
			b: 'Curly Brackets',
			c: 'Commas',
            d: 'Parentheses'
		},
		correctAnswer: 'a'
	},
    {
		question: 'Arrays in Javascript can be used to store ______.',
		answers: {
			a: 'Numbers and strings',
			b: 'Other arrays',
			c: 'Booleans',
            d: 'All of the Above'
		},
		correctAnswer: 'd'
	},
    {
		question: 'Commonly used datatypes DO NOT include:',
		answers: {
			a: 'Booleans',
			b: 'Alerts',
			c: 'Strings',
            d: 'Numbers'
		},
		correctAnswer: 'b'
	},
	{
		question: 'Not a question',
		answers: {
			a: 'not an answer',
			b: 'not an answer',
			c: 'not an answer',
            d: 'not an answer'
		},
		correctAnswer: 'none'
	}
];

function startQuiz(){
	startButton.classList.add('hide') //hides "start" button when clicked
	getStarted.classList.add('hide') //hides "welcome"
	nextButton.classList.remove('hide')
	rulesContainer.classList.remove('hide') //shows rules of quiz
	nextButton.addEventListener('click',() => {
		nextButton.classList.add('hide')
		questionContainer.classList.remove('hide')
		rulesContainer.classList.add('hide')
		timerContainer.classList.remove('hide')
		populateQuestion();
	})
}

//choosing answer A, B, C, or D populates a new question/choices
let counter = 0;
let score = 0;
choiceA.addEventListener('click', chooseAnswer)
choiceB.addEventListener('click', chooseAnswer)
choiceC.addEventListener('click', chooseAnswer)
choiceD.addEventListener('click', chooseAnswer)

function showResults() {
	const showResults = document.getElementById('show-results')
	showResults.innerHTML = 'Your score is: ' + score + ' / 8'
	// code to retrieve the player's initials
	let initials = prompt("Enter your initials: ");
	localStorage.setItem("initials", initials);
	localStorage.setItem("score", score);

	let savedInitials = localStorage.getItem("initials");
	let savedScore = localStorage.getItem("score");
	console.log("Your saved initials are " + savedInitials);
	console.log("Your saved score is " + savedScore);
	}  

function chooseAnswer(event) {
	counter = (counter + 1) % quizQuestions.length;

	if (counter === 8) {
	  questionContainer.classList.add("hide");
	  doneContainer.classList.remove("hide");
	  showResults();
	} else {
	  populateQuestion();
	  let selectedAnswer = event.target.id;
	  let correctAnswer = quizQuestions[counter-1].correctAnswer;
  
	  if (selectedAnswer === correctAnswer) {
		console.log("that is RIGHT!")
		score++;
	  } else {
		timeLeft -= 10; // remove 10 seconds from the timer
		if (timeLeft < 0) {
		timeLeft = 0;
		}
		console.log("that is WRONG!");
	  }
	}
}

function populateQuestion() {
	let displayQuestion = quizQuestions[counter].question
	getQuestions.replaceChildren(displayQuestion)
	let displayAChoice = quizQuestions[counter].answers.a
	choiceA.replaceChildren(displayAChoice)
	let displayBChoice = quizQuestions[counter].answers.b
	choiceB.replaceChildren(displayBChoice)
	let displayCChoice = quizQuestions[counter].answers.c
	choiceC.replaceChildren(displayCChoice)
	let displayDChoice = quizQuestions[counter].answers.d
	choiceD.replaceChildren(displayDChoice)
};


//quiz timer
let timeLeft = 100; // time in seconds
const timerEl = document.getElementById('timer')

const timer = setInterval(function() {
  if (timeLeft <= 0) {
    clearInterval(timer);
	questionContainer.classList.add('hide')
	doneContainer.classList.remove('hide')
	showResults();
  } else {
    timerEl.innerHTML = 'time left:  ' + timeLeft;
    timeLeft--;
  }
}, 1000); // 1000ms = 1 second


