// const : value will not change
// let : value can change
// var : value can change, but not recommended in modern JavaScript

// loop
const numbers = [11, 22, 44, 24,55]
console.log(numbers);

for(const num of numbers){
    console.log(num);
}




const fruits = ['apple', 'banana', 'orange', 'mango'];

for(const fruit of fruits){
    console.log(fruit);
    console.log('I want to eat');
}