// Write a function that calculates and prints the sum of the digits of a given number

function digit(number){
    
    if(number < 1){
        throw new Error('input should be positive')
    }

    let sentence = String(number)
    let count = sentence.split('')
   let sum = 0;
    count.forEach(element => {
        sum = sum + parseInt(element)
        
    });
    
    return sum;
    
}

// console.log('sum of digit 0', digit(0));
console.log('sum of digit 10 ', digit(10));
console.log('sum of digit 10 ', digit(9));
  
