//Day7
//FOR loops
var clothingItem={
    price:50,
    color:'beige',
    material:'cotton',
    season:'autumn'
}
for(const key of Object.keys(clothingItem)){
    console.log(key,":",clothingItem[key])
}

//Another sample, but didnt understand
function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();

  // FOR OF loops and objects

  const car={
    engine:true,
    steering:true,
    speed:"slow"
  }
  const sportsCar= Object.create(car);
  sportsCar.speed="fast";
  console.log("the sportsCar object: ",sportsCar);

  console.log("---------for in loop is unreliable");
  for (prop in sportsCar){
    console.log(prop);
  }

  console.log("iterating over object and its prototype");

  console.log("-------for of is reliable------");
  for(prop of Object.keys(sportsCar)){
    console.log(prop+": "+sportsCar[prop]);
  }
  console.log('nothing changed, still dont understand')

  