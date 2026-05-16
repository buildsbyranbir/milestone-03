// akta object create kora holo
// object er moddhe person er information rakha hoyeche
const person = {

    // person er name
    name: 'sodor uddin',

    // person er age
    age: 25,

    // person er profession
    profession: 'developer',

    // person er salary
    salary: 25000,

    // married kina
    // true mane married
    married: true
};


// puro object console e print korto
// console.log(person);




// dot notation diye object er property access kora hoy
// ekhane profession er value access kora hocche
// output hoto: developer
// console.log(person.profession);



// salary property er value income variable e rakha holo
const income = person.salary;


// income print korle output hoto 25000
// console.log(income);





// bracket notation use kore property access kora hocche
// third bracket [] diye key er name string akare dite hoy

// age property er value print korbe
// output hobe: 25
console.log(person['age']);



// age property er value old variable e store kora holo
const old = person['age'];


// old variable print korbe
// output hobe: 25
console.log(old);