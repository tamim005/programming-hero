// typeof 
var price = 100;
console.log(typeof price);

var fname = 'tamim';
console.log(typeof fname);

var isHappy = true;
console.log(typeof isHappy);

var romantic;
console.log(typeof romantic);


// toFixed 
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
//output 0.30000000000000004
sum = sum.toFixed(1);
//output 0.3 but this result is not number. it's show a string
sum = parseFloat(sum);
//now it's a number
console.log(sum);



// remainder % (vagses)
var mango = 11;
var person = 2;
console.log(mango/person);
//vagfol 5.5
console.log(mango%person);
//vagses 1