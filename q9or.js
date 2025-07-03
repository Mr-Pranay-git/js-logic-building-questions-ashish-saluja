function isPalandrom(inputString){
     
    for(let i=0; i<=inputString.length / 2; i++){
        if(inputString[i] !== inputString[inputString.length-1-i]){
            return false;
        }
    }
    return true;
}

console.log("pranay",isPalandrom("pranay"));
console.log("madam",isPalandrom("madam"));
