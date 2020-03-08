let login = function(){

    let email= element(by.id('email'));
    let password =element(by.id('password'));
    let loginbtn= element(by.id('btnSubmit'));

    this.get = function(url){
        browser.driver
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(3000)
        browser.driver.manage().window().maximize();
        console.log("For login driver is executed");
        browser.sleep(20000);
        browser.get(url);
    }
    this.enterEmail =  function(emailid){
        email.sendKeys(emailid);
    };

    this.enterPassword = function(pass){
        password.sendKeys(pass);
    }

    this.loginbtn =  function(){
        loginbtn.click();
    }
}
module.exports = new login();