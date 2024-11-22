//Arrays
var train1 = ["humans", "people", "restaurant", "baggage", "vehicles"];
console.log(train1[3]);
//NEXT
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
var colors=["tipo", "any", "benny"];
listArrayItems(colors);
//assignment
function letterFinder(word,match){
    for (var i=0;i<word.length;i++){
        if (word[i]===match){
            console.log("Found the",match,"at",i);
        }
        else{
                        console.log("---No match found at",i);

        }
    }
}
letterFinder("test","t");