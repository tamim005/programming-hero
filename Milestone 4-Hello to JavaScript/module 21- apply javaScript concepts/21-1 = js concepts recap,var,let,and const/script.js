//1  variable
var Age = 18;
let money = 20;
const countryName = "bagladesh";

//2 array
var friends = ["abul", "bahul", "cabul", "dabul", "ebul"];

// get an array element
var thirdFriend = friends[2];
console.log(thirdFriend);
// set an array element
friends[3] = "mustakim";
console.log(friends);

// 3 conditional
var friends = ["abul", "bahul", "cabul", "dabul", "ebul"];
if(friends.length > 5){
    console.log("tomer to onek friends")
}
else if(friends.length > 3){
    console.log("tmer matro ai koita priend")
}
else{
    console.log("tmer kno bundu nai kno")
}

// 4. loop
var number = 0;
while(number < 6){
    console.log(number);
    number++;
}
for(var i = 0; i < 6; i++){
    console.log(i);
}

// 5. function
function isMoonUp(time){
    if(time > 7){
        return true;
    }
    else{
        return false;
    }
}
var moon = 5;
console.log(isMoonUp(moon));

// 6. object
var jantus = {
    height: "5 feet 6 inches",
    romanticism: "heavvy",
    bappErTaka: 'nai'
}
console.log(jantus);