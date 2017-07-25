console.log("Unit test log example starts");

var password = "test";
var myValidator = require("./modules/passwordValidator");
var valid = myValidator.validPassword(password);

console.log("Your password '" + password + "' is valid --> " + valid);
