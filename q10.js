function noAndpower(number,power){
    if(isNaN(number)|| isNaN(power)){
        throw new SyntaxError("This is not allowed")
    }
    if(number || power <0 ){
        throw new SyntaxError("negative values ar not allowed")
     }

    let container = 1 ;
for (let i=1; i<=power; i++){
 container= container*number 
}

return container;
}



console.log(noAndpower(2,-3))


    // 5*3
    // 5*5*5


  