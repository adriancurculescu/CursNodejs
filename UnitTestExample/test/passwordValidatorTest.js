var chai = require("chai");
var passwordValidator = require("../modules/passwordValidator");


//module level
describe("passwordValidator", function () {

    //function level
    describe(".validPassword(password)", function () {

        //function test 1
        it("should have minimum 8 charaters", function () {

            //Test Goes Here

            //implementetion test with known wrong value
            var wrongPass = "1234567";
            var valid = passwordValidator.validPassword(wrongPass);
            
            //chai check
            chai.expect(valid).to.be.equal(false);


            //test with good value
            var goodPass = "12345678";
            var valid2 = passwordValidator.validPassword(goodPass);
            chai.expect(valid).to.be.equal(true);

        });

        //function test 2
        it("should not contains <password> inside", function () {

            //Test Goes Here

            //implementetion test with known wrong value
            var wrongPass = "password1";
            var valid2 = passwordValidator.validPassword(wrongPass);
            
            //chai check
            chai.expect(valid2).to.be.equal(false);


            //test with good value
            var goodPass = "bla-bla-bla-bla";
            var valid2 = passwordValidator.validPassword(goodPass);
            chai.expect(valid2).to.be.equal(true);

        });

    });
});