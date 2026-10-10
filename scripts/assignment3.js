// Part 1 - if only

console.log("Restaurant Decision Maker");

function checkDelivery(dish, tax){
    let total = dish + tax;

    if(total >= 30){
        console.log("Free Delivery");
    }
    if(total <= 29.99){
        console.log("Delivery fee applies")
    }

    return total
}
    
let x = checkDelivery(10.99, 2.60);
console.log("Salmorejo "  + x);

let y = checkDelivery(15.00, 3.00);
console.log("Grilled Pulpo " + y);

let xy = checkDelivery(38.99, 6.32);
console.log("Duck a L'orange " + xy);


// Part 2 - if/ else if / else

function getMenuType(hour){
    if(hour >= 7 && hour <= 11){
        console.log("Breakfast")
    }else if(hour >= 12 && hour <= 16){
        console.log("Lunch")
    }else if(hour >= 17 && hour <= 22){
        console.log("Dinner")
    }else{
        console.log("We are closed");
    }
}

getMenuType(9);
getMenuType(1);
getMenuType(13);
getMenuType(21);
    



