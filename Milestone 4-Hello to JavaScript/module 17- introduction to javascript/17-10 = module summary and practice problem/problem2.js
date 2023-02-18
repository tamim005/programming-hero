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