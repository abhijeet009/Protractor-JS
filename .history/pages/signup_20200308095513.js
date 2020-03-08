let signup= function(){

        let name = element(By.id('username'));
        let registerEmail = element(By.id('Email'));
        let password = element(By.id('NewPassword'));
        let btnCreateacc = element(By.id('btnLogInSubmit'));

        this.get = function(url){
        browser.driver
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(3000)
        browser.driver.manage().window().maximize();
        console.log("For signup driver is executed");
      //  browser.sleep(20000);
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

module.exports=new signup();