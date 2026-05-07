// orangePrice variable er moddhe 20 store kora hoyeche
var orangePrice = 20;
var bananaPrice = 15;

// parseInt() decimal er porer part kete sudhu integer ney
// tai "22.5" theke 22 hobe
var applePrice = parseInt("22.5");

// parseFloat() decimal number ke float hishebe ney
// tai "22.5" theke 22.5 hobe
// ager applePrice overwrite hoye jabe
var applePrice = parseFloat("22.5");

// output dibe 22.5
console.log(applePrice);

// typeof diye variable er data type check kora hoy
// output hobe "number"
// console.log(typeof orangePrice);

// dui ta number jog korbe
// output hobe 35
// console.log(orangePrice + bananaPrice);


// floating point number
var first = 0.1;
var second = 0.2;

// ekhane vul hoyeche
// first = second mane first er value second er soman hoye jabe
// tai total er value hobe 0.2
var total = first = second;

// toFixed(5) decimal er por 5 digit dekhay
// output hobe 0.20000
// console.log(total.toFixed(5));