//write a function that calaulates and prints the simple interset on a loan amount 

function simpleInterest(PrincipleAmount, InterestRate, TimeDuration){
   let simpleInterestVal = (PrincipleAmount * InterestRate * TimeDuration)/100

   if (typeof PrincipleAmount || typeof InterestRate || typeof TimeDuration !== 'number'){
    return console.log('input is not a number');
    
   }
   else{
    return(    
        simpleInterestVal.toFixed(2)
    )
   }
}

console.log(simpleInterest(1000, 5, "hello"));
