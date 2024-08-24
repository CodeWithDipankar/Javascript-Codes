// constant variable
const accountId = 123456

// variable declaration with let 
let accountEmail = "dipankar@gmail.com"

// variable declaration with var 
var accountPassw0rd = "abdcc123#"

//no var or let used Note: not recomended for any variable declaration
accountCity = "Kolkata"

// if we dont want to assign any value to a variable but want to declare for further use 
let accountState

// to print we know
console.log("accountId:",accountId)

// To print in tabular format , accountState will be Undefined as we have not defined any value to it
console.table([accountEmail, accountId, accountPassw0rd, accountCity, accountState])



/*

Note: dont use var for declaration of a variable because it has some block scope issues .

*/