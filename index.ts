#! /usr/bin/env node
import inquirer from "inquirer";
import inguirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter first Number",
    type: "number",
    name: "num1",
  },
  {
    message: "Enter second Number",
    type: "number",
    name: "num2",
  },
  {
    message: "Select the Operators to perform actions",
    type: "list",
    name: "operator",
    choices: [
      "Addittion",
      "Subraction",
      "Multiplication",
      "Division",
      "Modulation",
      "Exponention",
    ],
  },
]);

if (answer.operator === "Addittion") {
  let sum: number = answer.num1 + answer.num2;
  console.log(`your Answer is ${sum}`);
} else if (answer.operator === "Subraction") {
  let sub: number = answer.num1 - answer.num2;
  console.log(`your Answer is ${sub}`);
} else if (answer.operator === "Multiplication") {
  let multiply: number = answer.num1 * answer.num2;
  console.log(`your Answer is ${multiply}`);
} else if (answer.operator === "Division") {
  let division: number = answer.num1 / answer.num2;
  console.log(`your Answer is ${division}`);
} else if (answer.operator === "Modulation") {
  let Modulus: number = answer.num1 % answer.num2;
  console.log(`your Answer is ${Modulus}`);
} else if (answer.operator === "Exponention") {
  let Exponent: number = answer.num1 ** answer.num2;
  console.log(`your Answer is ${Exponent}`);
} else {
  console.log("Please Select Valid Operator");
}
