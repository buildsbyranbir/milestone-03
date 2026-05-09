const salary = 25000;
const isBCS = true;
const height = 68;
const car =true;
/* if (salary > 20000){
    console.log('Su----patro');
}
else{
    console.log('onno partro khuji')
} */


/* if (salary > 20000 || height > 72){
    console.log('sobai raji');
}
else{
    console.log('vag tui mokbul');
} */


if (salary >19000 && height > 69){
    console.log('sobai raji');
}
else{
    console.log('vag tui mokbul');
}


var marks = 85;
var attendance = 90;

if (marks >= 80 && attendance >= 75) {
    console.log("Scholarship pabe");
}


var rainy = true;
var umbrella = false;

if (rainy || umbrella) {
    console.log("Baire jawa jabe");
}



const price = 5600;

if (price >= 5000){
    //10% discount
    const discount = price * 10/100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (price >= 3000){
    //5% discount
    const discount = price * 5/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    console.log(price);
}

