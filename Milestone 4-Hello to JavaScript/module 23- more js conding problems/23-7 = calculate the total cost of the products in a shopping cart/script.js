


//shopping cart with quantity
const shoppingCart = [
    {name: 'shoe', price: 1200, quantity:1},
    {name: 'shirt', price: 500 , quantity:3},
    {name: 'pant', price: 1000, quantity:2},
    {name: 'belt', price: 200 , quantity:1}
];
function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense);