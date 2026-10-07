// Void Function
// Step 1: Declare the function
function login(){
    console.log("Welcome to the system!");
}

// Step 2: Call the function
login();

// Functions with parameters
function logout(user){ // "Ryan Anthony"
    console.log("Goodbye " + user +  " see you later!");
}

logout("Ryan Anthony");

// multiple parameters
function gradeExam(student, correctItem, points){
    let totalPoints = correctItem * points;
    console.log(`${student} grade of the exam is: ${totalPoints}`);
}

gradeExam("Ryan Anthony", 10, .33);
gradeExam("Luis", 13, .33);

// Functions with returns
function add(num1, num2){
    let total = num1 + num2;
    return total;
}

let x = add(10, 12);
console.log("The result is: " + x);
console.log(x - 5);