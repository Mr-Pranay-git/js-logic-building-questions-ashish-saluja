// number divisible by 4 is leap year



function Year(checkyear){
    // if (checkyear%4 == 0) {
    //     console.log('year is leap year')
    // }
    // else{
    //     console.log('year is not leap year')
    // }

    return(checkyear%4 == 0 ? 'leap year' : 'not a leap year')
}

console.log(Year(2020));
console.log(Year(2023));

