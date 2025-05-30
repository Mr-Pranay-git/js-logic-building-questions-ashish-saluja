 function VowelAndConsonent(inputString){
    
    const cosntVowel = 'aeiou'
    const cosntConsonent = 'bcdfghjklmnpqrstvwxyz'

    let vowelCount = 0;
    let consonentCount = 0;

    inputString = inputString.toLowerCase();
    inputString = inputString.replace(/ /g, '');
    console.log(inputString); 
    
    for(let i=0; i<inputString.length; i++){
        if(cosntVowel.includes(inputString[i])){
            vowelCount++;
        }
        else if(cosntConsonent.includes(inputString[i])){
            consonentCount++;
        }
        else {
            console.log(inputString[i],'Is neither vowel nor consonent');
            
        }
    }
    
    return{vowelCount, consonentCount}
}

console.log(VowelAndConsonent("Hello World Happy birth day"));
console.log(VowelAndConsonent("Hello World 257*%8"));
