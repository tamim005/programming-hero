let myNumber = [12,8,-5,11,-55];
function isPositive(number){
    let arr = [];
    for(let i = 0; i <number.length; i++){
        let element = number[i];
        if(element > 0){
            arr.push(element)
        }
        else{
            break;
        }
    }
    return arr;
}
console.log(isPositive(myNumber));

