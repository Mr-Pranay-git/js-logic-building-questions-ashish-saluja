// Write a program that checks if the provided password is
// strong or not

const small_letters = "abcdefghijklmnopqrstuvwxyz"
const cap_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const special_char = "!@#$%^&*(){}[]\|<>" 
const number = "0123456789"
function isStrongpassword(password) {
    password = password.trim()
    let hasLower = false
    let hasUpper = false
    let hasSpecial_char = false
    let hasNumber = false

    if( password.length < 8) return false

    for (let char of password){
        if(small_letters.includes(char)) return hasLower = true

        if(cap_letter.includes(char)) return hasUpper = true

        if(special_char.includes(char)) return hasSpecial_char = true

        if(number.includes(char)) return hasNumber = true
    }
    
    if(hasLower && hasUpper && hasSpecial_char && hasNumber ) return true
    
    return false
}

console.log(isStrongpassword('1234Hq!'))
console.log(isStrongpassword('Abc@1234  '))

