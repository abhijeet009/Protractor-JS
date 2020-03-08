let boardOperations = require('../pages/boardOperations');
let login = require('../pages/login');//remove if you remove login page code
describe('Board page',function(){
    
    console.log("Board operation Test is executed");
    it('boardOperation function', function() {
        //code from login page need to remove once conf.js can run multiple test case at once ....
        browser.driver.sleep(1000);
        login.get('https://huddle-board-v2.huddleiq.com/');
        login.enterEmail("abhijeet@mailinator.com");
        login.enterPassword("Welcome@01");
        login.loginbtn();
        //until here ..............................................................................
        browser.driver.sleep(3000);
        boardOperations.clickBoard();
        boardOperations.selectShape();
        boardOperations.selectRectangle();
    })
})