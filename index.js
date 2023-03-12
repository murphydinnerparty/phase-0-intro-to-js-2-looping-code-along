// Code your solutions in this file
function writeCards(names, event){
    let peopleToGift =[];
        for (let i = 0; i < names.length; i++){
            peopleToGift.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        }
    return peopleToGift;
}
function countDown(number){
   number = 10;
   while (number > 0){
       console.log(number--);
   }
 return console.log(number);  
}