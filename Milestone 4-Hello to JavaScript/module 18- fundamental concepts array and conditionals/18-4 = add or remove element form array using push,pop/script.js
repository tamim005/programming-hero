// push(array er sesh a kiso dokane)
var number = [10, 39, 48, 38];
number.push(7);
console.log(number);

// pop (array er shes theke kiso ber kora)
var fname = ['mustakim', 'raz', 'rifat', 'ashik', 'limon', 'alamin'];
fname.pop();
fname.pop();
console.log(fname);

// if i show with element gonna pop or whit element gonna push just add it
var picnicFee = [500, 1000, 1500, 2000, 2500];
var gone = picnicFee.pop();
picnicFee.unshift(500000);
picnicFee.shift();
console.log(gone);
console.log(picnicFee);

//push() -add array element at the end
//pop() -remove array element at the end
// unshift() -add array element at the beginning
// shift() -remove array element at the beginning


var lLName = ['tamim', 'mustakim', 'nasrin'];
var gone = lLName.shift()
console.log(gone);
console.log(lLName);
