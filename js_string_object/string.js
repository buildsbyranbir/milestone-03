// =========================
// JavaScript String Full Practice
// =========================


// String declare kora
let firstName = "Ranbir";
let lastName = 'Roy';

console.log(firstName);
console.log(lastName);


// typeof diye data type check
console.log(typeof firstName);



// =========================
// String Concatenation
// =========================

let first = "Web";
let second = "Developer";

// dui ta string jora lagano
let full = first + " " + second;

console.log(full);



// =========================
// Template String
// =========================

let name = "Ranbir";
let age = 20;

// backtick (` `) diye variable use
let intro = `My name is ${name} and I am ${age} years old`;

console.log(intro);



// =========================
// String Length
// =========================

let language = "JavaScript";

// koyta character ache
console.log(language.length);



// =========================
// Character Access
// =========================

// index number diye character access
console.log(language[0]);
console.log(language[4]);



// =========================
// Uppercase & Lowercase
// =========================

let text = "JavaScript";

// sob boro hater letter
console.log(text.toUpperCase());

// sob choto hater letter
console.log(text.toLowerCase());



// =========================
// Trim
// =========================

let sentence = "    Hello World    ";

// extra space remove kore
console.log(sentence.trim());



// =========================
// Includes
// =========================

let line = "I love JavaScript";

// kono word ache kina check
console.log(line.includes("love"));

console.log(line.includes("Python"));



// =========================
// StartsWith & EndsWith
// =========================

let word = "JavaScript";

// shuru ki diye hoise
console.log(word.startsWith("Java"));

// sesh ki diye hoise
console.log(word.endsWith("Script"));



// =========================
// indexOf
// =========================

// kon character kon index e ache
console.log(word.indexOf("S"));



// =========================
// Slice
// =========================

// string er kichu part kete neya
console.log(word.slice(0, 4));

console.log(word.slice(4));



// =========================
// Replace
// =========================

let msg = "I love Java";

// Java replace hoye JavaScript hobe
let newMsg = msg.replace("Java", "JavaScript");

console.log(newMsg);



// =========================
// Split
// =========================

let fruits = "apple,banana,mango";

// comma diye vag hoye array banabe
let fruitsArray = fruits.split(",");

console.log(fruitsArray);



// =========================
// Repeat
// =========================

let hi = "Hi ";

// 3 bar repeat korbe
console.log(hi.repeat(3));



// =========================
// String to Number
// =========================

let num = "50";

// string ke number e convert
console.log(parseInt(num));

console.log(Number(num));



// =========================
// Escape Character
// =========================

// double quote use korar jonno escape
let quote = "I am \"Ranbir\"";

console.log(quote);



// =========================
// Loop Through String
// =========================

let tech = "JavaScript";

// ek ekta character print korbe
for(let char of tech){
    console.log(char);
}



// =========================
// Reverse String
// =========================

let text2 = "hello";

// split("") = array banay
// reverse() = ulta kore
// join("") = abar string banay
let reversed = text2.split("").reverse().join("");

console.log(reversed);



// =========================
// Palindrome Check
// =========================

let palindromeWord = "madam";

// ulta string banano
let reverseWord = palindromeWord.split("").reverse().join("");

// same hole palindrome
if(palindromeWord === reverseWord){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}



// =========================
// Email Validation
// =========================

let email = "test@gmail.com";

// @ ache kina and .com diye sesh kina
if(email.includes("@") && email.endsWith(".com")){
    console.log("Valid Email");
}
else{
    console.log("Invalid Email");
}