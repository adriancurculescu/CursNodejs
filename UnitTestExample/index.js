console.log("Unit test log example starts");

var password = "testBauBau2017");
var myValidator = require("./modules/passwordValidator");
var valid = myValidator.validPassword(password);

console.log("Your password '" + password + "' is: " + valid);
