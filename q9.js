function ispalandrome(String){
    const content = String.split(' ')
    console.log(content);
    
    let newString =' '
    for(let i=content.length-1; i>=0; i--){
        newString += content[i] 
    }
    
    if(newString == String){
        console.log('the entered String is palandrome');
    }
    else{
        console.log(`the entered String (${newString}) is not palandrome`);
        
    }
    
}

ispalandrome("cho be ji bha ji be cho ")


// cho be ji bha ji be cho