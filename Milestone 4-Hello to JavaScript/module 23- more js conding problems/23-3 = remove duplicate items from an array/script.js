const names = ['tamim','nasrin','tamim','raz', 'mustakim','raz'];
function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i<names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
console.log(removeDuplicate(names));