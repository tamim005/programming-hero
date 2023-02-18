

// 
const friendsAge = [13, 14, 11, 17, 21, 16, 15, 20];

console.log(friendsAge.includes(34));
console.log(friendsAge.includes(13))

// or (tamon use kora hy na . includes e use kora hy)
if(friendsAge.indexOf(13) !== -1){
    console.log(true)
}

// 
const friendAge = [10,11,12];
const newFriendAge = [13,14,15];
const allFriendAge= friendAge.concat(newFriendAge);
console.log(allFriendAge)
