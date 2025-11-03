// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.

var myMoney = 2500;
var applesPrice = 400;
var orangePrice = 500;

var totalCost = applesPrice + orangePrice;
var change = myMoney - totalCost;
console.log(change);




// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

var allSubjectNames = ['Mathematics', 'Biology', 'Chemistry', 'Physics', 'Bangla']
var allSubjectsMark = (80, 85, 87, 90, 99);
var totalMarks = 80 + 85 + 87 + 90 + 99;
var averageMarks = totalMarks / 5;
console.log(averageMarks.toFixed(2));




// Task-3
// You task is to divide the given number by 5 and show the remainder as the output.

// Input:
// The first line of the input contains the number.

// Output:
// Print the remainder.

var number = 266
var remainder = number % 5;
console.log(remainder);




// Task-4
// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.

var a = isNaN('11');
console.log(a);
var a = isNaN(2 - 10);
console.log(a);
