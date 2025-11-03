/**
 * TERNARY ----> three parts
 * 
 *  ?  :
 * 
 *  */

const age = 12;
// normal if else
// if (age >=18){
//     console.log('You can vote');
// }
// else {
//     console.log('Ghumai thako');
// } 

// simple ternary
age >= 18 ? console.log('You can vote') :console.log('Ghumai thako');


let price = 500;
const isLeader = true;

if(isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
console.log(price);

// ternary
price = isLeader === true ? 0 : price + 100;