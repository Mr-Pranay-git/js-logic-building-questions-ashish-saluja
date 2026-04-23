// Write a program that checks if the provided password is
// strong or not

const small_letters = "abcdefghijklmnopqrstuvwxyz"
const cap_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const special_char = '!@#$%^&*(){}[]\|<>' 
function password(password) {
    let lower = false
    let upper = false
    let special_char = false

    if (password.length > 8) return false
    for (let char of password){
        if(small_letters.includes(char)) return lower = true

        if(cap_letter.includes(char)) return upper = true

        if(special_char.includes(char)) return special_char = true
    }
    
    return lower && upper && special_char

}

console.log(password('A!'))
