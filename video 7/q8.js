function table(tableof, upto){
    for(let i=1; i<=upto; i++){
        console.log(`${tableof} * ${i} = ${i*tableof}`);
    }
} 

table(10,2)