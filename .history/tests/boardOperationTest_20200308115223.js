let boardOperations = require('../pages/boardOperations');
let login = require('../pages/login');//remove if you remove login page code
describe('Board page',function(){
    
    console.log("Board operation Test is executed");
    it('boardOperation function', function() {
     
        browser.driver.sleep(3000);
        boardOperations.clickBoard();
        browser.driver.sleep(3000);
        boardOperations.selectShape();
        browser.driver.sleep(3000);
     //   boardOperations.selectRectangle();
    })
})