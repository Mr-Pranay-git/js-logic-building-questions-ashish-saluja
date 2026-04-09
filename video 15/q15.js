// Write a function that tells if the given number is prime or not.

function primeORnot(number){
    let result = true
    for(let i=2; i< number; i++ ){
        console.log(number, '%', i, 'is', number % i);
        
        if(number % i ===  0 ){
            result = false
            break
            
        }        
    }
    return result;
}

console.log('15', primeORnot(15));
console.log('19', primeORnot(19));
