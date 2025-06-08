// Problem statement - 5
// . Write a function that returns the reverse of a string
// · Input : A string
// · Return: reversed string
// · Example
//  "Ashish" -> "hsihsA"




// function reverse(inputString){
    
    
//     let store = ''
//     for(let i= inputString.length-1; i>=0; i--){
//         store += inputString[i];
//     }
    
//     return store;
// }


// console.log(reverse("Ashish"))
// console.log(reverse("software development"))
// console.log(reverse("1547"))
// console.log(reverse("100015"))



function arrayReverse(str) {

    arr = str.split("").reverse().join("");
    console.log(arr);    
}



console.log(arrayReverse("Software development"))