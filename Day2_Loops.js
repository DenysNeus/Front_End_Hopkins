//Loops
for (var i=1;i<=4;i++){
    console.log(i);
    }
    console.log("go");
    console.log("FOR loop finished");


    //while loop
    var counter=3;
    while(counter>0){
        console.log(counter);
        counter=counter-1;
    }
    console.log("while loop finished");

// NEsted loops below
for (var year=2023;year <2025;year++){
    console.log(year)
}
// NEsted 

for (var year=2023;year <2025;year++){
    console.log(year)
    for(var month=6;month<9;month++){
        console.log("--------",month)
    }
}
// NEsted SIMPLE
for (var i=2023;i <2025;i++){
    console.log(i)
    for(var j=6;j<9;j++){
        console.log("--------",j)
    }
}
for (i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("Hello");
    }
}
for(var i = 0; i <= 5; i++) {
    console.log("Hello");
  }
  function addTwoNums(a,b){
    var c=a+b;
    console.log(c);
}