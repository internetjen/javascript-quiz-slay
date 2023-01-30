const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const rulesContainer = document.getElementById('rules-container')
const questionContainer = document.getElementById('question-container')
const choiceButton = document.getElementById('choices-buttons')
const getQuestions = document.getElementById('question')
const getA = document.getElementById('a')
const getB = document.getElementById('b')
const getC = document.getElementById('c')
const getD = document.getElementById('d')

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', nextButton)
choiceButton.addEventListener('click', chooseAnswer)

//All quiz questions
let quizQuestions = [
	{
		question: 'What is the correct JavaScript syntax to change the content of this HTML element: <p id="demo">This is a demonstration.</p>',
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
	}
];

function startQuiz(){
	startButton.classList.add('hide') //hides "start" button when clicked
	nextButton.classList.remove('hide')
	// questionContainer.classList.remove('hide') //shows questions/choices when "start button is clicked
	rulesContainer.classList.remove('hide') //shows rules of quiz
	populateQuestion()
}

function populateQuestion() {
	// quizQuestions.forEach((question, index) => {
	// 	getQuestions.textContent = quizQuestions[0].question
	// 	getA.textContent = 
	// 	getB.textContent = ('another thing')
	// 	getC.textContent = ('another thing')
	// 	getD.textContent = ('another thing')
	// });
};

function chooseAnswer() {
	console.log('choice made')
}
