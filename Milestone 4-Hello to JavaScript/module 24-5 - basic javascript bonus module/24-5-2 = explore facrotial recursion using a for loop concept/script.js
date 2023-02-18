// what is recursion
/* 
a function that call itself knows as recursive function and the approach is called recursion.orthat(kno ekta function er bitor theke sei function ke call korle take recursion bole)
*/

// 1 theke 5 pogonto sob gula sonkher gunfol
/* let factorial = 1; 
for(let i = 5; i >= 1; i--){
    factorial = factorial * i;
}
console.log(factorial); */
// 1 ththe 5 porgonto sob gula sunkher gonfol useing recursion
function factorial(i){
    if(i == 1){
        return 1
    }
    // aita ocche recursion er stooping point
    return i * factorial(i - 1);
}
const result = factorial(5);
console.log(result)