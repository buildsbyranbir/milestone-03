const school = 'Dipshikha Meti School';
console.log(school);

// puro string ke small letter e convert korbe
// output: dipshikha meti school
console.log(school.toLowerCase());

// puro string ke CAPITAL letter e convert korbe
// output: DIPSHIKHA METI SCHOOL
console.log(school.toUpperCase());



// subject name store kora holo
const subject = 'Mathematics';

// book name store kora holo
const book = 'Mathematics';


// ekhane strict equality (===) use kora hoyeche
// eta value ebong data type duitai check kore
// subject ar book er value same tai condition true hobe
if (subject === book) {

    // condition true hole ei line run korbe
    console.log('The subject and book are the same.');
}

else {

    // condition false hole ei line run korto
    console.log('The subject and book are different.');
}