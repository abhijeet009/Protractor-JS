let login = require('../pages/login');
describe('angularjs homepage', function() {
  console.log("In describe");
  it('should greet the named user', function() {
  
    login.get('https://huddle-board-v2.huddleiq.com/');
    browser.sleep(2000);
   // element(by.model('yourName')).sendKeys('Julie');
    login.enterEmail("abhijeet@mailinator.com");
    login.enterPassword("Welcome@01");
    login.loginbtn();
    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
    }
  );
});
