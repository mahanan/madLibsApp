"use strict"

let userInputs = ["moon", "sun", "day", "dark"];
let originalStory = `The ${userInputs[0].toUpperCase()} shines only when is ${userInputs[3].toUpperCase()}. The ${userInputs[1].toUpperCase()} shines only when is ${userInputs[2].toUpperCase()}. There is working harmony between the ${userInputs[0].toUpperCase()} and the ${userInputs[1].toUpperCase()}, this is a shift, a permanent shift.`;
let numberOfQuestions = 4;

let planet1 = prompt("Enter a planet: ");
let planet2 = prompt("Enter a planet: ");
let day = prompt("Enter the word day: ");
let dark = prompt("Enter the word dark: ");

let questionArray = [planet1, planet2, day, dark];

let questionCounter = 0;
for (let i = numberOfQuestions; i > 0; i--){
    console.log(i);
    questionCounter += 1;
    console.log(questionCounter);
}
console.log(originalStory);

//let originalStory = "The moon shines only when its dark. The sun shines only when is day. There is working harmony betwwen the sun and the moon, this is a shift, a permanent shift.";