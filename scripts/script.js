console.log("Script");
// Comments
// Comments are note for devs- browser ignores them

// Strings
//A string is text. Always is wrapped in quotes.

let firstName = "Ryan Anthony";
let city = "Sicily";

console.log(firstName);
console.log(city);

// Numbers
let age = 43;
let gpa = 3.96;

console.log(age);
console.log(gpa);

// Boolean
// A boolean is eaither true or false

let isStudent = true;
let isVA = false;

console.log(isStudent);
console.log(isVA);

// Arithmetic Operations
let num1 = 9;
let num2 = 10;

let sum = num1 + num2;
let sub =num1 - num2;

console.log("Sum" + sum);
console.log("Sub" + sub);

let dom = num1 * num2;
let sin = num1 / num2;

console.log("Dom" + dom);
console.log("Sin" + sin);

//Build Strngs with variables

// Option 1: concatenation (using +)
console.log("My name is: " + firstName + " and I live in: " + city);

// Option 2: template literal (cleaner use ``)
console.log(`My name is ${firstName} and I live in ${city}`);

// Constants
//const = this will NEVER change
const daysInWeek = 7
const pi = 3.1416

console.log(daysInWeek);
console.log(pi);