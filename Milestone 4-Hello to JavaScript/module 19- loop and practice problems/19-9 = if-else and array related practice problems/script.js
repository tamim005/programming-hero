// problem 1

// a) ans:
var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango';
console.log(fruits);
// b) ans:
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);

// problem 2

//  a) ans:
var num1 = 13;
var num2 = 79; 
var num3 = 45;
if(num1 > num2){
  if(num1 > num3){
    console.log(num1);
  }
  else{
    console.log(num3);
  }
} 
else{
  if(num2 > num3){
    console.log(num2);
  }
  else{
    console.log(num3);
  }
}

// b) ans:
var side1 = 9;
var side2 = 8;
var side3 = 9;
if(side1 == side2 || side1 == side3 || side2 == side3){
  console.log('isosceles');
}