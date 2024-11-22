//Programming paradigms
//There are two types of programming paradigms- Functional and Object oriented
//in FP a lot of functions and variables
function getTotal(a, b) {
    return a + b
}
var num1 = 2;
var num2 = 3;
var total = getTotal(num1, num2);
//another sample
//the thing is that function and data are separated
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance); 
/*
and another paradigm is object oriented
Where data and functions are stored as properties INSIDE METHODS    
*/
var virtualPet={
    sleepy:true,
    nap: function(){}
}
//now Ill update properties instead of creating new return values

var virtualPet={
    sleepy:true,
    nap: function(){
        this.sleepy=false
    }
}
console.log(virtualPet)
virtualPet.nap()
console.log(virtualPet)

//MORE FP
//First class functions
function addTwoNums(a,b){
    console.log(a+b)
}
function randomNum(){
    return Math.floor((Math.random()*10)+1);
}
function specificNum(){return 42}

var useRandom=true;
var getNumber;

if(useRandom){
    getNumber=randomNum
}else{
    getNumber=specificNum
}
addTwoNums(getNumber(),getNumber())
