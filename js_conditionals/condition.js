const price = 5000;

if (price >= 5000){
    // 10% discount
    const discount =price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price > 3000){
    // 5% discount
    const discount =price * 5 /100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}





const age = 70;
const foodPrice = 500;
if (age <=12) {
    console.log('You can eat for free');
}

else if (age >= 60) {
    // 50% discount
    const discount = foodPrice * 50 / 100;
    const payAmount =foodPrice - discount;
    console.log(payAmount);
}

else {
    console.log(foodPrice);
}