

// array
// array er bitore ow amra chaile object rakte pari
const product = [
    {name: "phone", price: 2000},
    {name: "laptop", price: 12000}
]
console.log(product)



// argument
function add(num1,num2){
    console.log(num1,num2);
    console.log(arguments);
}
add(12,13,14,43,34,53);