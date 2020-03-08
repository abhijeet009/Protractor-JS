let signup= function(){

        let name = element(by.id('username'));
        this.get = function(url){
        browser.driver
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(3000)
        browser.driver.manage().window().maximize();
        console.log("For login driver is executed");
        browser.sleep(20000);
        browser.get(url);
    }



}