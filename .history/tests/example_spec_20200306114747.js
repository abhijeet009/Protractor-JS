describe('angularjs homepage', function() {
  console.log("In describe");
  it('should greet the named user', function() {
    browser.driver
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(3000)
    browser.driver.manage().window().maximize();
    console.log("driver is executed");
    browser.sleep(20000);
    browser.get('https://huddle-board-v2.huddleiq.com/');
    browser.sleep(2000);
   // element(by.model('yourName')).sendKeys('Julie');
    element(by.id('email')).sendKeys("abhijeet@mailinator.com");
 

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
    }
  );
});
