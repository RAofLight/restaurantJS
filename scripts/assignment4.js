// Part 1

console.log("Weekly Restaurant Report ");

const restaurantName = "Ase";
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const sales = [360, 470, 290, 505, 460, 620, 720];

// Part 2

function generateReport(){
    let total = 0;
    let output = "";
}

function getDayLabel(sales){
    if(sales <= 399){
        return("Slow Day ")
    }else if(sales >=400  && sales <= 600){
        return("Good Day ")
    }else if(sales >= 601){
        return("Excellent Day")
    }
}

for(let i=0; i<7; i++){
    console.log(`${days[i]}: $${sales[i]}: ${getDayLabel(sales[i])}`);
}

for(let i=0; i<sales.length; i++){
    total = sales[i];
}

output = `Weekly Total: $${total}`;
console.log("Wekly Total: " + output);
