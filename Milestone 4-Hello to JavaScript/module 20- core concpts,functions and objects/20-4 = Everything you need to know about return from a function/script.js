function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;       
}
var myTaka = 200;
var singaras = bringSingara(myTaka);
console.log("You got", singaras,"singara");