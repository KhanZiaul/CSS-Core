// tallesr person in array by function

function height(value){

    let max = value[0];
    
    for (let i = 1 ; i < value.length ; i++){

        if (max < value[i]) {

            max = value[i];
        }
    }
    
    return max;
}


let tallestPerson = height([120 , 250 , 199 , 190 , 107]);

console.log(tallestPerson);