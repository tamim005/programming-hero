// simple way
function leapYearFind(num){
    let quantity = num % 4;
    if(quantity === 0){
        return true;
    }
    else{
        return false;
    }
}
let year = 2024;
console.log(leapYearFind(year));




// 
// accurate way
function checkLeapYear(year){
    if((year % 4 == 0 && year % 100 != 0)|| (year % 400 == 0)){
        return true;
    } 
    return false;
}
var myYear = 2023;
console.log(checkLeapYear(myYear));