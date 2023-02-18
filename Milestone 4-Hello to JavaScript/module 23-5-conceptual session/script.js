function oilPrice(num1,num2,num3){
    let dieselPrice  = num1 * 114;
    let petrolPrice = num2 * 130;
    let octanPrice = num3 * 135;
    let totalPrice = dieselPrice + petrolPrice + octanPrice;
    return totalPrice
}
let result = oilPrice(1,1,1);
console.log(result);
