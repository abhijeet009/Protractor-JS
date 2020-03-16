let login = require('../pages/login');
describe('login page', function() {
  console.log("Login Test is executed");
  it('Login function', function() {
  /* login.js is called and exicuted*/
    browser.driver.sleep(1000);
    login.get('https://huddle-board-v2.huddleiq.com/');
    login.enterEmail("abhijeet@mailinator.com");
    login.enterPassword("Welcome@01");
    login.loginbtn();
    browser.driver.sleep(10000);
    }
  );
});
