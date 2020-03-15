const invalidNameMsg = "Is required and must containt at least 3 characters"
const invalidEmailMsg = "valid email is required"
const invalidPassMsg = `
Invalid password must contain at least 8 digits,
 1 Uppercase and 1 special digit of these . ! # $ % & ' * + / = ? ^ _ ~ -
`

//Regular expressions

const emailReg = /(^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]*[/.])/g
const passReg = /(.*[a-zA-Z.!#$%&'*+/=?^_`~-])/g

export {
    invalidNameMsg,
    invalidEmailMsg,
    invalidPassMsg,
    emailReg,
    passReg
}