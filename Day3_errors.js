//Bugs and errors
try{
    console.log(c+d)
}catch(err){
    console.log(err)
    console.log("there was an error");

}
console.log("it works");
//class assignment
console.log("class assignment");
function addTwoNums(a,b){
    try{
        if (typeof(a)!='number'){
           throw new ReferenceError('the first argument is not a number')
           
        }
        else if (typeof(b)!='number'){
            throw new ReferenceError('the second argument is not a number')
        }
        else{
    console.log(a+b)
        }
    }
    catch(err){
            console.log(err,"good so far")
    }
}
addTwoNums(5,"5");
    console.log("works")


//defensive programming
console.log("defensive programmingks")

function letterFinder(word, match) {
    var condition1=typeof(word)=='string' && word.length>=2;
    var condition2=typeof(match)=='string' && match.length==1;
    if(condition1==true && condition2==true){
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
    }
    else{
                    console.log('Please pass correct arguments to the function.')
    }
}
letterFinder(2,2);
letterFinder("cat","c");