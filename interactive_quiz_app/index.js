const questions = [
    {
        "question": "what is your name ?",
        "options": ["daksh", "abc", "xyz", "lmn"],
        "answer": 0
    }, 

    {
        "question": "what is your age",
        "options": ["19", "20", "30", "22"],
        "answer": 1
    }, 
    {
        "question": "what is your age",
        "options": ["19", "20", "30", "22"],
        "answer": 1
    }, 
]


let score = 0;
let currentQuestion = 0;

const quizDiv = document.querySelector(".quiz");




function generateQuestionDiv(currQuestion) {
    quizDiv.innerHTML = ""
    quizDiv.innerHTML = `<div class="question_div">
        <h1>${questions[currQuestion].question}</h1>
        <ul> 
            ${questions[currQuestion].options
                .map((element, index) => `<li><button class="${index}" onClick="handleAnswer(${index})">${element}<button></li>`)
                .join("")}
        </ul>
        <button class="next_question_button">Next Question</button>
    </div>`;
}

function handleAnswer(selected) {
    if (selected == questions[currentQuestion].answer) {
        score ++
    }
    currentQuestion++
    generateQuestionDiv(currentQuestion)
    console.log(score)
}



generateQuestionDiv(currentQuestion)

const nextQuestionButton = document.querySelector(".next_question_button")

nextQuestionButton.addEventListener("click", () => {
    currentQuestion++
    generateQuestionDiv(currentQuestion)
})