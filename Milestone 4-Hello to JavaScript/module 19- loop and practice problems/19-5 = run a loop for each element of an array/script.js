var numbers = [45, 87, 89, 56, 32, 51, 25];
for(var i = 0; i < 7; i++){
    var number = numbers[i];
    console.log(number);
}
// or
var numbers = [45, 87, 89, 56, 32, 51, 25];
for(var i = 0; i < 7; i++){
    console.log(numbers[i]);
}

// if I add some extra element to the previous examples, the previous example does not work. because there is a condition that is i < 7. that means if I add some extra element on that array the array length goes greater than 7. so i < 7 is not gonna work. so that's why we use a condition like (i < numbers.length). now we are able to add unlimited elements and don't need to change the condition every time when we add something.
var numbers = [45, 87, 89, 56, 32, 51, 25];
numbers.push(500);
numbers.unshift(1000);
for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
