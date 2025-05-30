// Write a function that calculate factorial of a given number

// function fact(){
    
// }

let count = 1
for(let i=4; i>1; i--){  //3
    count = count * i       //12
    console.log(count);   
}



console.log('factorial using recursion');
 
function factorial(inputNumber){
    // console.log(' input number is ', inputNumber);
    
    if(inputNumber < 0 ){
        throw new Error("input no should be grater than or equal to 0")
    }
    if(inputNumber === 0 || inputNumber === 1 ){
        return 1
    }

    return inputNumber * factorial(inputNumber - 1)
}


console.log(factorial(4));
