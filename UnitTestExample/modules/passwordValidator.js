exports.validPassword = module.exports.validPassword = function(password) {

    //test 1 implementtation
    if(password.length < 8){
        return false;
    }

    // test 2 implementation
    if(password.indexOf("password") >= 0){
        return false;
    }


    return true;
}