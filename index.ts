#! /tscusr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome to Aroofa Allauddin - Number Guessing game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter Your Guess number(Number Limit from 1 to 5);",
    },
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulation ! You guess a correct number,");

}
else{
    console.log("Sorry, You guess a wrong number");
}