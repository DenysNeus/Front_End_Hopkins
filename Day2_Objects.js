//Object
function print(a) {
    console.log(a);
}
var storeManager = {}
storeManager.range = 4;
storeManager.social = 50;
storeManager.street = 50;
storeManager.health = 30;
storeManager.special = "finding business opportunities";
storeManager.greeting = "Let's make more money";
console.log(storeManager);
//Assistant 
console.log("another way of assignment");
var assistantManager = {
    movement: 3,
    social: 30,
    street: 30,
    health: 40,
    color: "brown"
}
//add to object when directly declared
assistantManager.achive = "smthng";
console.log(assistantManager);
//DAY 3
assistantManager.social = 10;

//Object literals and the brackets notation
print("Object literals and the brackets notation");
var house = {};
house["rooms"] = 2;
house["floors"] = "few";
print(house.rooms);
house.floors = "a lot of";
print(house);
//evaluate expressions.
print("evaluate expressions.")
var arrOfKeys = ["speed", "altitude", "color"];
var drone = {
    speed: 100,
    altitude: 200,
    color: "black"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    print(drone[arrOfKeys[i]])
}
//ARRAYS functions
//used to add and remove items from array
print("ARRAYS functions push/pop");
var fruits = [];
//to add
fruits.push("apple");
fruits.push("pear");
print(fruits);
//to remove
fruits.pop();
print(fruits);
//Array builder function
print("Array builder function");
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    print(arr);
}
arrayBuilder("using", "the", "array");
//String methods 
/*
charAt() 

concat() 

indexOf() 

lastIndexOf() 

split() 

toUpperCase() 

toLowerCase()  
*/

//Object Methods
print("Object Methods");

var car = {};
car.color = "blue";
car.mileage = 123100;
print(car);
car.turnOn = function () {
    print("the engine is on")
}
print(car);
car.turnOn();