function evenOrOdd(num){
    var quantity = num % 2;
    if(quantity === 0){
        return true;
    }
    else{
        return false;
    }
}
let number1 = 98;
console.log(evenOrOdd(number1));
let number2 = 117;
console.log(evenOrOdd(number2)); 