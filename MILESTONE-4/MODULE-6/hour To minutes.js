//hour to seconds

function hourTmTs(hour){

    let hourTmIs= hour*60;

    let hourTsIs= hour*60*60;

    return (hourTsIs);
}

let hourTmTsIs = hourTmTs(1);

console.log(hourTmTsIs,' seconds');