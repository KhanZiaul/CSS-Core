//break and continue statement

// break statement

var scores = [20,40,60,70,90,100,110,130];

for(var i=0; i<scores.length; i++){

    var score = scores[i];
    if(score > 70){
        break;
    }

    console.log(score);
}

