const first = 'Abid';
const last = 'Navid';


// sudhu first + last korle majkhane kono space thakto na
// output hoto: AbidNavid
// const fullName = first + last;


// first ar last er majkhane akta space add kora holo
// tai output hobe: Abid Navid
const fullName = first + ' ' + last;

// full name console e print korbe
console.log(fullName);



// concat() diye duita string jora lagano hocche
// ekhaneo majkhane akta space add kora hoyeche
const fullName2 = first.concat(' ' + last);

// concat diye banano full name print korbe
console.log(fullName2);



// includes() check kore kono character ba word ache kina
// ekhane check korche last string e 'd' ache kina

// 'Navid' er moddhe 'd' ache
// tai output hobe true
console.log(last.includes('d'));