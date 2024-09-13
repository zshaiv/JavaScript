const account_ID= 144553
let account_email="mernIX@gmail.com"
var password= "1234"
account_city= "Gurgaon"
let accountState;

//account_ID=2//not allowed

account_email="hc@hc.com"
password="122332"
account_city="bangalore"

console.log(account_ID);

/*
prefer not to use var
due to issue in block scope and functional scope
*/

console.table([account_ID, account_city, account_email, password,accountState])
