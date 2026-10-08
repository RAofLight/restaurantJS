// Part 1 - Function w/o parameters
function showRestaurantName(){
    console.log("Welcome to Ase ");
}
showRestaurantName();

// Part 2 - Function with one parameter
function greetCustomer(user){
    console.log(" Welcome "   +   user  +   "  We are happy to have you at Ase .");
}
greetCustomer("Talya Rae")
greetCustomer("Zayne Mykel")
greetCustomer("Anthony Hamdan")

// Part 3 - function with two parameters that returns a value
function calculateToatl(dish, tax){
    let total = dish + tax;
    return total;
}

let x = calculateToatl( 9.95, 1.80 );
console.log("Salmorejo: " + x);

let y = calculateToatl(15.00, 2.50);
console.log("Grilled Pulpo: " + y);

let xy = calculateToatl(38.99, 6.32);
console.log("Duck a L'orange: " + xy);
