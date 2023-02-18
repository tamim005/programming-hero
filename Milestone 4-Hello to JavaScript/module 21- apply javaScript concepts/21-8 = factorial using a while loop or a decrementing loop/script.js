

// factorial using while loop in straight way
function factorial(num){
    let result = 1;
    let i = 1;
    while(i <= 7){
        result = result * i;
        i++;
    }
    return result;
}
let factorialNumber =7;
console.log(factorial(factorialNumber))