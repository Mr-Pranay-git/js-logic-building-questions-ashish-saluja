// Write a function that finds all the factors of a given number  Input : number, positive integer

function factor(number){
    if(number < 1){
        throw new Error("Input must be a positive integer");
    }
    let array = []
    for(let i=0; i<=number; i++){
        if(number % i == 0){
            array.push(i);                        
        }
    }
    console.log(array);
}

factor(-35);
