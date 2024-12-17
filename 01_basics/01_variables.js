const accountId = 144553
let accountEmail = "hitesh@google.com" 
var accountPassword = "12345"
accountCity = "Jaipur"
let accountStates;
// prefer not use var because of issue in block scope and functional scope

// accountId = 2//not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountStates])
