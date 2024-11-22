//Day8_
//forEach
const fruits=['kiwi','mango','apple','pear'];
function appendIndex(fruit,index){
    console.log(`${index}.${fruit}`)
}
fruits.forEach(appendIndex);
//filter
const nums = [0,10,20,30,40,50];
function filter(num){
    if(num>20){
        console.log(num)
    }
}
nums.filter(filter);
//map
[0,10,20,30,40,50].map( function(num) {
    return num / 10
})
//object
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys=Object.keys(drone);
droneKeys.forEach(function(key){
    result.push(key,drone[key])
})
console.log(result);

//MAPS

new Map();

let bestBoxers=new Map();
bestBoxers.set(1,"Usyk");
bestBoxers.set(2,"Klitchko")
bestBoxers.set(3,"Joshua");
console.log(bestBoxers);

bestBoxers.get(1);

//SET constructor to choose unique values

new Set();
const repFruits=['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits= new Set (repFruits);
console.log(uniqueFruits);

//REST operator and ...(spread) operator
