// converting a string value to a number
let aString = "10"
console.log("The value in string:",aString,", Type:",typeof(aString));
let aNumber = Number(aString)
console.log("The value converted to :",aNumber,", Type:",typeof(aNumber));


// lets have it in different way ---->
/*
1. Here the output of the conversion will be nan as the value of
aNewString is not a pure number so the value can not be converted
to a number, so we will get a NaN output.
2. The Type of NaN is a number  //console.log(typeof(NaN));
*/

let aNewString = "10abc"
console.log("The value in string:",aNewString,", Type:",typeof(aNewString));
let aNewNumber = Number(aNewString)
console.log("The value converted to :",aNewNumber,", Type:",typeof(aNewNumber));
console.log(typeof(NaN));

// converting a number value to a string
let valueInNumber = 10
let valueInString = String(valueInNumber)

console.log("The value converted to string is:",valueInString, "and the Type is:",typeof(valueInString));

// converting a boolean to number or number to boolean

let a = 10
let aInBool = Boolean(a)
console.log("The value of a was ",a,"and after converting to boolean the value converted to:",aInBool,"The type of aInBool is:",typeof(aInBool))

let b = true
let b1 = false
let bInNumber = Number(b)
let bInNumber1 = Number(b1)

console.log("b:",b,"bInNuber:",bInNumber)
console.log("b1:",b1,"bInNuber1:",bInNumber1)



// *************************** Operations *********************************
console.log('\n\n\n*************************** Operations *********************************')

let value = 10
console.log("alue:",value);