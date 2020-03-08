let signup= function(){

        let name = element(by.id('username'));
        let registerEmail = element(by.id('Email'));
        let password = element(by.id('NewPassword'));
        let btnCreateacc = element(by.id('btnLogInSubmit'));

        this.get = function(url){
        browser.driver
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(3000)
        browser.driver.manage().window().maximize();
        console.log("For login driver is executed");
        browser.sleep(20000);
        browser.get(url);
    }
    this.registerName =  function(registerName){
        name.sendKeys(registerName);
    };
    this.enterEmail =  function(email){
        registerEmail.sendKeys(email);
    };
    this.enterPassword =  function(registerPassword){
        password.sendKeys(registerPassword);
    };
    this.btnCreateAccount = function(){
        btnCreateacc.click();
    }
}