let boardOperations = require('../pages/boardOperations');
let login = require('../pages/login');//remove if you remove login page code
describe('Board page',function(){

    beforeEach(function() {
        var origFn = browser.driver.controlFlow().execute;
        browser.driver.controlFlow().execute = function () {
        var args = arguments;
        // queue 100ms wait
        origFn.call(browser.driver.controlFlow(), function () {
        return protractor.promise.delayed(200);   // here we can adjust the execution speed
        });
        return origFn.apply(browser.driver.controlFlow(), args);
        };
      });
    
    console.log("Board operation Test is executed");
    it('boardOperation function', function() {
     
        browser.driver.sleep(3000);
        boardOperations.clickBoard();
        browser.driver.sleep(6000);
        boardOperations.selectShape();
        browser.driver.sleep(3000);
     //   boardOperations.selectRectangle();
    })
})