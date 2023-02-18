// problem 1
var momGave = 1000;
var cost = 700;
var subtraction = momGave - cost;
console.log(subtraction);
// or
var momGave = 1000;
var orangePrice = 400;
var applePrice = 300;
var totalPrice = (orangePrice + applePrice);
var shopkeeperReturn = momGave - totalPrice;
console.log(shopkeeperReturn);

// problem 2
var mathematicsNumber = 75.25;
var biologyNumber = 65;
var chemistryNumber = 80;
var physicsNumber = 35.45;
var banglaNumber = 99.50;
var totalMark = mathematicsNumber + biologyNumber + chemistryNumber + physicsNumber + banglaNumber;
var averageMarks = totalMark / 5;
// eikhane subject 5 ta tai total mark ke 5 diay vag korte hbe.
averageMarks = averageMarks.toFixed(2);
//when i use toFixed the result convert into a string
averageMarks = parseFloat(averageMarks);
// now the result is a number 
console.log(averageMarks);

// problem 3
var firstString = 'I am going to be';
var secondString = 'an awesome web developer';
var combineString = firstString + ' ' + secondString;
console.log(combineString);

//problem 4
var number = 119;
var dividerNumber = 5;
var remainder = number % dividerNumber;
console.log(remainder);
// or
var number = 119;
console.log(number % 5);


