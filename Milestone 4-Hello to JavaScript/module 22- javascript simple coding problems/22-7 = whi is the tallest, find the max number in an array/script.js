// find the min number in an array
function minInArray(numbers){
    let smallest  = numbers[0];
    for(i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;
}
const height = [167,190,120,65,450];
const shortest = minInArray(height);
console.log(shortest);