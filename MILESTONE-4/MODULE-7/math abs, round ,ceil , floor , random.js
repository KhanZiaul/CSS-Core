// math pow , abs , round , ceil , floor , random

// power ------------------>

console.log(Math.pow(3,2));

// absolute ---------------->

// normally
const num1 = 15;

const num2 = 20;

if( num1-num2 >2){

    console.log('you are hot');
}

else{

    console.log('you are not');
}

// use absolute

const num3 = 15;

const num4 = 20;

if( Math.abs(num3-num4) > 2){

    console.log('you are hot');
}

else{

    console.log('you are not');
}

// round , ceiling and floor -------------------->

let x = 2.1416;

console.log(Math.round(x));

console.log(Math.ceil(x));

console.log(Math.floor(x));