function number(a){
    if(a % 2 == 0){
        console.log("it is an even number")
    }
    else if(a % 2 !== 0 ){
        throw new console.error("it is odd number");
    }
}

number(20)
number(-20.120)
