

// chaile ekta function er bitor theke same function ke aber call korte perbo
function sum(i){
    if(i == 1){
        return 1;
    }
    return i + sum(i - 1);
}
const result = sum(5);
console.log(result);