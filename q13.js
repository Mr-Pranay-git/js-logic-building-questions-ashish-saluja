// Write a function that calculates and returns the average of a set of numbers.

function average(numbers){

    if(Array.isArray(numbers) == false){
        throw new Error("given input is not an array");
    }
    let sum = 0;
    for(let i=0; i<=numbers.length-1; i++){  
        
        if(typeof numbers !== 'number'){
            throw new Error("all elements in the array must be numbers");
        }
        
        if(numbers[i]<0){
            throw new Error("the value inside the array should be positive");
        }  
        else{
            sum = sum+ numbers[i]    
        }  

      }
      return (sum/numbers.length)
    
    
    
}

console.log("Average of the number [1,2,3] is ",average([1,2,3]));    // Output: 2
console.log("Average of the number [1,2,-4] is ",average([1,2,-4]));   //the value inside the array should be positive
console.log("Average of the number [hello] is ",average(["hello"]));    // all elements in the array must be numbers
