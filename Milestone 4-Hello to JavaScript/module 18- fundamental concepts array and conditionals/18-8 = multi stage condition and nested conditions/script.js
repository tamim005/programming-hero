// multi stage condition
var money = 36;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if(danishPrice < money){
    console.log('dan dan danish khamu');
}
else if(butterBread < money) {
    console.log('Butter bon khamu');
}
else if(toastBiscuit < money) {
    console.log('chubai bhubai toast biscuit khamu');
}
else{
    console.log('Khali cha e sasther jonno valo');
}


// nested conditions
var math = true;
var algebra = true;
var linearAlgebra = true;

if(math == true) {
    if(algebra == true){
        console.log('ami algebra pari.');
        if(linearAlgebra == true){
            console.log('ami linearAlgebra pari');
        }
        else{
            console.log('ami lenearAlgebra bule gsi');
        }
    }
    else{
        console.log('algebra bule gsi');
    }
}
else{
    console.log('ami math bule gsi');
}