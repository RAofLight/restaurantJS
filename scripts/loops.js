console.log("Loops");

document.write("<li>2 x 1 = 2</li>");
document.write("<li>2 x 2 = 4</li>");
document.write("<li>2 x 3 = 6</li>");

for(let i=0;i<4;i++){
    document.write("My for loop is working? ");
}

//multiplication table of 2
let num = 2;
document.write('<h3>Multiplication Table ${num}</h3>');


for(let i=1; i<=10; i++){
    let res = 1*num;
    document.write( '<p>${num} x ${i} = ${res}</p>');
}

// Different increments

//counting by 1
for(let i=0; i<5; i++){
    console.log(i); // 0, 1, 2, 3, 4
}
//counting by 5
for(let i=0; i<=20; i+=5){
    console.log(i); // 0, 5, 10, 15, 20
}

// Arrays
// an array is a list of values stored iun one variable
// without an array:
let temp1 = 30;
let temp2 = 40;
let temp3 = 25;
let temp4 = 27;
let temp5 = 28;

// ...this can get messy
// With an array

let temperatures = [30, 40, 25, 27, 28];
console.log(temperatures);

temperatures[0] = 50 // change the value

console.log(temperatures[0]);
console.log(temperatures[1]);
console.log(temperatures[2]);
console.log(temperatures[3]);
console.log(temperatures[4]);

// loop to travel the array
for(let i=0; i<5; i++){
    console.log(temperatures[i]);
}

// Two parallel arrays
// The arrays share the index to store the related data

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const sales = [320, 410, 290, 505, 480, 620, 710];

for(let i=0; i<7; i++){
    console.log(`${days[i]}: $ ${sales[i]}`);
}