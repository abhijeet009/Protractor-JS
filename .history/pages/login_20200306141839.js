let login = function(){

    let email= element(by.id('email'));
    let password =element(by.id('password'));
    let loginbtn= element(by.id('btnSubmit'));

    this.get = function(url){
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