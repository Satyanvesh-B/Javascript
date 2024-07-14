const accountId = 12345
let accountEmail = "helloworld@gmail.com"
var accountPassword = "Welcome"
accountCity = "Hyderabad"
let accountState

// accountId = 2 // not allowed

accountEmail = "hehe@gmail.com"
accountPassword = "112233"
accountCity = "Amalapuram"

console.log(accountId);

/*
don't prefer var because of issue in block scope and funtional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
