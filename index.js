#! /usr/bin/env node
import inquirer from "inquirer";
// initialize questions array
let questions = [];
// Adding quiz questions to array
// q 1
questions.push({
    question: "Q no 1 ) What is inquirer?",
    options: ["Package", "Software", "Program", "Application"],
    correctAnsIndex: 0,
});
// q 2
questions.push({
    question: "Q no 2 ) What is the actual name of arrow function?",
    options: [
        "Async function",
        "Normal FUnction",
        "Lambda function",
        "None of these",
    ],
    correctAnsIndex: 2,
});
// q 3
questions.push({
    question: "Q no 3 ) What is the output of console.log( 2 + '3' ) ?",
    options: ["5", "23", "Error", "None of these"],
    correctAnsIndex: 0,
});
// console.log(questions);
// I add 3 questions, you can add more as you want...
// Now starting the quiz
console.log("-".repeat(50));
console.log("\tWelcome in Typescript Quizz...");
console.log("-".repeat(50));
let result = 0;
for (let i = 0; i < questions.length; i++) {
    console.log(questions[i].question);
    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            choices: questions[i].options,
            message: "Select an option : ",
        },
    ]);
    if (answer.option === questions[i].options[questions[i].correctAnsIndex]) {
        result++;
        console.log("Correct");
    }
    else {
        console.log("\n\tIncorrect answer! correct answer is " +
            questions[i].options[questions[i].correctAnsIndex] +
            "\n");
    }
}
console.log(`You give ${result} out of ${questions.length} correct answers.`);
let percentage = (result / questions.length) * 100;
console.log(`Your percentage is ${percentage}`);
