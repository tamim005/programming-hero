function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const findIndex = i;
        const findElement = numbers[findIndex];
        sum = sum + findElement;
        console.log(findIndex,findElement,sum);
    }
    return sum;

}
let myNumbers = [5,7,8,10,45,30];
getSumOfAnArray(myNumbers);