let login = require('../pages/login');
describe('angularjs homepage', function() {
  console.log("In describe");
  it('should greet the named user', function() {
  /* login.js is called and exicuted*/
    login.get('https://huddle-board-v2.huddleiq.com/');
    login.enterEmail("abhijeet@mailinator.com");
    login.enterPassword("Welcome@01");
    login.loginbtn();

    }
  );
});
