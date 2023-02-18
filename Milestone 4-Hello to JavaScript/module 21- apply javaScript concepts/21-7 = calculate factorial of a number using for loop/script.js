

// find factorial logical way using of else
function factorial(num) {
    if (num < 0){
        return -1;
    } 
    else if (num == 0) {

        return 1;
    }
    else {
        return (num * factorial(num - 1));
    }
  }
  console.log(factorial(7))

//   find  factorial logical way using while loop
function factorial(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
let number = 7;
console.log(factorial(number));

// find factorial logical way using for loop
function factorial(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
var factorialNumber = 7;
console.log(factorial(factorialNumber));