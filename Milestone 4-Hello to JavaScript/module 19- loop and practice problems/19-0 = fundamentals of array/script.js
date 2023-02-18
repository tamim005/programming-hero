// access array element by index
var fruits = ['Apple', 'Banana', 'Mango', 'Orang', 'Strawberries'];
var accessElement = fruits[2];
console.log(accessElement);

// indexOf()
var find = fruits.indexOf('Banana');
console.log(find);

// array's element value change
var friends = ['mustakim', 'ashik', 'limon', 'alamin'];
friends[2] = 'raz';
console.log(friends); 

// array push()
var friendsAge = [18, 19, 20];
friendsAge.push(21);
console.log(friendsAge);
// array pop()
friendsAge.pop();
console.log(friendsAge);
// array unshift()
friendsAge.unshift(17);
console.log(friendsAge);
// array shift()
friendsAge.shift();
console.log(friendsAge);