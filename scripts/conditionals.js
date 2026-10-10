console.log("Conditionals");

// if-statement condition (y/n)
// -- SYNTAX --
// if(condition){
// code to be run if the condition is true
//}

let result = 80;
result = 100;

if(result > 60){
    console.log("You pass the exam! ");
}
// case 1: 5 == 5 -> true
// case 2: 5 =="5" -> true
// case 3: 5 ==="5" -> false

// if-else statement condition (y/n)
// -- SYNTAX --
//if(condition){
//code to be run if the condition is true
//}else{
//code to be run if the condition is false
//}

let points = 10;
if(points > 60){
    console.log("You won! ");
}else{
    console.log("You lose! ");
}

// Challeng 1: print if the water is boiling or not
// consider 100 as the boiling temp

let water = 120
if(water > 100){
    console.log("The water is boiling! ");
}else{
    console.log("The water isn't boiliong. ");
}

// else-if condition
//if(condition1){
//code to be run if the condition is true
//}else if(condition2){
// code to be run if the condition2 is ture
//}else{
// code to be run if conditions are false
//}

let age = 30;


if(age < 13){
    console.log("You are a child. ");
}else if(age < 21){
    console.log("You are a teenager. ");
}else if(age < 64){
    console.log("You are and adult");
}else{
    console.log("You are a senior");
}

// Challenge 2:
// Scenario:
// You're designing a tiny system for self-driving bikes.
// Intructions:
// Ask for the traffic light color
//("green", "yellow", "red") and tell the 
// bike what to do ( Go!, Slow down, Stop!)

let trafficLight = "green" //prompt(" Input a color for trafficlight").toLowerCase();
trafficLight = "yellow"

if(trafficLight === "green"){
    console.log("Go! ");
}else if(trafficLight === "yellow"){
    console.log("Slow down! ");
}else if(trafficLight === "red"){
    console.log("Stop! ");
}else{
    console.log("Invalid input");
}

// && and|| operators
// && = AND - both condtions must be true
// || = OR - at least one condition must be true

let hour = 20;
hour = 14;

if(hour >=12 && hour <=16){
    console.log("Lunch Time! ");
}

let isWeekend = false;
let isHoliday = true;

if(isWeekend || isHoliday){
    console.log("Restaurant is closed today ");
}else{
    console.log("Restaurant is open");
}

// if inside a function
// you'll need this for the assignment

function checkAge(age){
    if(age >= 18){
        return "Can order alcohol";
    }else{
        return "Can not order alcohol";
    }
} 

let message1 = checkAge(20);
console.log(message1);

let message2 = checkAge(15);
console.log(message2);

let message3 = checkAge(43);
console.log(message3);