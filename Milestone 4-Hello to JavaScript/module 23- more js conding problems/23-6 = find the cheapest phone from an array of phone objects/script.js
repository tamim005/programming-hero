const phones = [
    {name: "samsung", camera: 128, storage: "500GB", price: 120000, color: "black"},
    {name: "iphone", camera: 128, storage: "500GB", price: 180000, color: "black"},
    {name: "oppo", camera: 128, storage: "500GB", price: 45000, color: "black"},
    {name: "vivo", camera: 128, storage: "500GB", price: 50000, color: "black"},
    {name: "lg", camera: 128, storage: "500GB", price: 100000, color: "black"}
];
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i <phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);