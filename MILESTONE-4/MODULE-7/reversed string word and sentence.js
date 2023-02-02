// reverse string words and sentence


//reverse sentence

function sentence(value){

    let reversed = '(done).';
    for(let i= value.length -1; i >= 0 ; i--){

        reversed = reversed + value[i];

    }

    return reversed;
}

let reverseSentence = sentence('This is reverse sentence');

console.log(reverseSentence);