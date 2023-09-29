// const startButton = document.getElementById("startbutton")
// console.log(startButton)
// const questionSection = document.getElementById("questions-section")
// const answerSection = document.getElementById("answer-options")   

// const count = 0

// const questions = [
//     {
//         prompt: "What is the day after Sunday?",
//         choices: ["Monday", "Wednesday", "Saturday", "Yesterday"],
//         correctchoice: ["Monday"],  
//     },
//     {
//         prompt: "How many days in the week are there?",
//         choices: [1, 14, 7, 6],
//         correctchoice: [7],
//     },
//     {
//         prompt: "What time is it considered to be a new day?",
//         choices: ["1pm", "2am", "12am", "12pm"],
//         correctchoice: ["12am"],
//     },
//     {
//         prompt: "How many wheels are there on a car?",
//         choices: [3, 13, 8, 4],
//         correctchoice: [4],
//     }

// ]

// console.log(questions[0].choices[0])
// function startQuiz (){
// questionSection.innerHTML= questions[count].prompt


// questions[count].choices.forEach(choice => {
//     const button = document.createElement('button')
//     button.innerHTML = choice;
//     button.addEventListener('click', () => { count++
    
//     })

//     answerSection.appendChild(button)
// }




// startButton.addEventListener("click", startQuiz)

const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerSection = document.getElementById("answer-options");

let count = 0;

const questions = [
    {
        prompt: "What is the day after Sunday?",
        choices: ["Monday", "Wednesday", "Saturday", "Yesterday"],
        correctchoice: "Monday",
    },
    {
        prompt: "How many days in the week are there?",
        choices: [1, 14, 7, 6],
        correctchoice: 7,
    },
    {
        prompt: "What time is it considered to be a new day?",
        choices: ["1pm", "2am", "12am", "12pm"],
        correctchoice: "12am",
    },
    {
        prompt: "How many wheels are there on a car?",
        choices: [3, 13, 8, 4],
        correctchoice: 4,
    },
];

function startQuiz() {
    if (count < questions.length) {
        questionText.textContent = questions[count].prompt;
        answerSection.innerHTML = ""; // Clear previous choices

        questions[count].choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice;
            button.addEventListener('click', () => {
                if (choice === questions[count].correctchoice) {
                    // Handle correct answer here (e.g., increase score)
                }
                count++;
                startQuiz(); // Move to the next question
            });

            answerSection.appendChild(button);
        });
    } else {
        // Quiz is finished, you can display a message or take further action
        questionText.textContent = "Quiz Finished!";
        answerSection.innerHTML = "";
    }
}

startButton.addEventListener("click", startQuiz);
