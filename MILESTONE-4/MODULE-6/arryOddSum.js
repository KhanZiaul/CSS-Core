// find array odd number sum

function oddSum(ages){

let sum = 0;
for(let i=0 ; i< ages.length; i++){
    if(ages[i] %2 !=0){
        sum=sum+ages[i];
    }

  }

  return sum;
}

let oddSumIs = oddSum([1,2,3,4,5,6,7]);

console.log(oddSumIs);