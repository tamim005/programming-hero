// problem 3

// ans to the question no a)
var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1 >= num2 && num1 >= num3) {
    console.log("num1 is the largest number");
}
else if (num2 >= num1 && num2 >= num3) {
    console.log("num2 is the largest number");
}
else {
    console.log("num3 is the largest number");
}


// ans to the question no b)
var sides1 = 9;
var sides2 = 8;
var sides3 = 9;

if(sides1 == sides2 || sides1 == sides3){
    console.log("This triangle is isosceles");
}
else if(sides2 == sides3 || sides2 == sides1){
    console.log("This triangle is isosceles");
}
else {
    console.log("This triangle is not isosceles");
}