// Write a function that finds and prints the maximum element in an array of numbers.

function findBiggestNumber(numbers){
    if(!numbers || numbers<=0){
        throw new Error("this is not a valid input")
    }
    let biggestno= numbers[0];
    
    
    for(let i=0; i<numbers.length; i++){
        if(numbers[i].isNaN = true){
            throw new Error('some input are not a number')
        }
        if(typeof numbers[i] !== 'number'){
            throw new Error("this array contains non-number values")
        }
        if(numbers[i]> biggestno){
            biggestno = numbers[i];
        }
    }
    return biggestno;
}


console.log('biggest num is', findBiggestNumber([5,8,10,2,'hello']))
// console.log('biggest num is', findBiggestNumber(null))