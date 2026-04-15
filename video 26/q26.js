// Write a program that checks if a given number is a perfect number
// Perfect number : The sum of its proper divisors equals the number itself.
// ex- 1+2+3= 6 = true

function checkPerfectNum(number){
    const sum = 0;
    const properDivisor = []; 

    for(let i =1; i<number; i++){  
        if(number%i === 0){  
            properDivisor.push(i)        
            sum += i
        }
        else {
            continue;
        }
    }
    return sum == number ? `${number} perfect number`: `${number} is not a perfect number`;
}

console.log(checkPerfectNum(28))
