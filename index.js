#! /usr/bin/env node
// initialize questions array
let questions = [];
// Adding quiz questions to array
// q 1
let question1 = {
    question: "What is inquirer?",
    options: ["Package", "Software", "Program", "Application"],
    correctAnsIndex: 0,
};
questions.push(question1);
// q 2
let question2 = {
    question: "What is the actual name of arrow function?",
    options: [
        "Async function",
        "Normal FUnction",
        "Lambda function",
        "None of these",
    ],
    correctAnsIndex: 2,
};
questions.push(question2);
// q 3
let question3 = {
    question: "What is the output of console.log( 2 + '3' ) ?",
    options: ["5", "23", "Error", "None of these"],
    correctAnsIndex: 0,
};
questions.push(question3);
// console.log(questions);
// I add 3 questions, you can add more as you want...
// Now starting the quiz
console.log("-".repeat(50));
console.log("\tWelcome in Typescript Quizz...");
console.log("-".repeat(50));
export {};
