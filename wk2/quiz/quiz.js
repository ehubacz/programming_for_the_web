


const quiz = [
    {question: "What vegetable is comparable to an ogre",
    answer: "onion"},
    {question: "What is needed to break a curse? ",
    answer: "true love's kiss"},
    {question: "Where do ogres live? ",
    answer: "swamp"}
];

console.log(quiz);
const quizLength = quiz.length;
console.log(quizLength);

const questionIndex = Math.floor(Math.random() * (quiz.length -1));
console.log(questionIndex);


let promptResponse = window.prompt("Let's Play a Game! " + quiz[questionIndex].question);

window.alert("You answered "+ promptResponse + ". "+ "The correct answer was " + quiz[questionIndex].answer);