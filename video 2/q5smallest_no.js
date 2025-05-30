// Write a function that finds and prints the smallest number
// among three given numbers.

function smallestno(a,b,c){
    if(a < b && a< c){
        console.log("the smallest no is ", + a)
    }
    else if(b<a && b<c){
        console.log("the smallest no is ", + b)
    }
    else if(c<a && c<b){
        console.log("the smallest no is ", + c)
    }
}

smallestno(5,4,1)
smallestno(2,3,0)
smallestno(-6,-1,0)


// ANOTHER APPROACH TO SOLVE THE PROBLEM
console.log("for second approach to solve the problem")

function smallestno2(a,b,c){
    let smallest = a ;
    if(b <smallest){
        smallest = b;
    }
    if(c < smallest){
        smallest = c;
    }
    
    return smallest;

}

console.log("smallest of  three",  smallestno2(5,3,9))
console.log("smallest of  three",  smallestno2(2,3,0))
console.log("smallest of  three",  smallestno2(-6,-1,0))
console.log("smallest of  three",  smallestno2(6,-1.5,0))
