function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const findIndex = i;
        const findElement = numbers[findIndex];
        sum = sum + findElement;
    }
    return sum;

}
function getOddNumbersOfAnArray(numbers){
    let oddNumbers = [];
    for(let i = 0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 == 1){
            sum = element;console.log(index,element)
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
const myNumbers = [12,65,45,78,32,45,91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers)
console.log(oddNumbers)
const oddNumbersSum = getSumOfAnArray(oddNumbers);
console.log("Odd number sum", oddNumbersSum)
