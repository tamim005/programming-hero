// problem 1
var moneyGiven = 1000;
var applePrice = 400;
var orangePrice = 300;

var totalPrice = applePrice + orangePrice;
var giveBack = moneyGiven - totalPrice;
console.log(giveBack);

// problem 2
var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicMarks + banglaMarks;
var averageMarks = totalMarks / 5;
var twoDecimalAverageMarks = averageMarks.toFixed(2);
var twoDecimalAverageMarksNumber = parseFloat(twoDecimalAverageMarks);
console.log(twoDecimalAverageMarksNumber);

// problem 3
var number = 119;
var remainder = number / 5;
console.log(remainder);