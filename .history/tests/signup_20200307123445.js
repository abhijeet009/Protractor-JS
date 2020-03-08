let signup = require('../pages/signup');
describe('signup testcase',function(){
    console.log("In signup test case");
    it('should greet the named user', function() {
        signup.get('https://huddle-board-v2.huddleiq.com/signup/');
        signup.registerName("Added by Protractor Script ");
        signup.enterEmail("new@mailinator.com");
        signup.enterPassword("Welcome01");
        signup.btnCreateAccount();
        driver.Close();

    })



});