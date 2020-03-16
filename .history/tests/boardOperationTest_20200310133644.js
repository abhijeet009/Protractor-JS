let boardOperations = require('../pages/boardOperations');
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

let login = require('../pages/login');//remove if you remove login page code

describe('Board page',function(){

    beforeEach(function() {
      driver = await new Builder().forBrowser('chrome').build()
      vars = {}
      
        var origFn = browser.driver.controlFlow().execute;
        browser.driver.controlFlow().execute = function () {
        var args = arguments;
        // queue 100ms wai3
        origFn.call(browser.driver.controlFlow(), function () {
        return protractor.promise.delayed(1500);   // here we can adjust the execution speed
        });
        return origFn.apply(browser.driver.controlFlow(), args);
        };
      });
    
    console.log("Board operation Test is executed");
    it('Draw Square', function() {
     
        //browser.driver.sleep(3000);
        boardOperations.clickBoard();
        //browser.driver.sleep(6000);
        boardOperations.selectShape();
       // browser.driver.sleep(3000);
        browser.actions()
        .mouseMove({x: 100, y: 100})
        .mouseDown()
        .mouseMove({x: 100, y: 100})
        .perform();
       // browser.sleep(8000);
        
     //boardOperations.selectRectangle();
    });

    it('Add comment box',function(){
        //browser.sleep(8000);
        console.log("Executed comment box");
        boardOperations.addCommentbox();
        browser.actions().mouseDown().perform();
        browser.actions().mouseMove({x: 400, y: 400}).click()
        browser.actions().mouseUp().perform();
      //  browser.sleep(8000);
        boardOperations.addTopic("Added from script");
        boardOperations.addNewcomm("Added comment from code Please go through the code");
        boardOperations.clickPost();
    })

    it('writing using pen', async()=>{
      await driver.findElement(By.css(".pen-tool .svg__icon")).click()
      // 5 | click | css=.tool-pen > .svg__icon |  | 
      await driver.findElement(By.css(".tool-pen > .svg__icon")).click()
      // 6 | mouseDownAt | id=rectZoom | 2164.64111328125,7384.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
      }
      // 7 | mouseMoveAt | id=rectZoom | 2164.64111328125,7384.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      // 8 | mouseUpAt | id=rectZoom | 2164.64111328125,7384.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).release().perform()
      }
      // 9 | click | id=rectZoom |  | 
      await driver.findElement(By.id("rectZoom")).click()
      // 10 | mouseDownAt | id=rectZoom | 2214.64111328125,7273.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
      }
      // 11 | mouseMoveAt | id=rectZoom | 2214.64111328125,7273.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      // 12 | mouseUpAt | id=rectZoom | 2214.64111328125,7273.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).release().perform()
      }
      // 13 | click | id=rectZoom |  | 
      await driver.findElement(By.id("rectZoom")).click()
      // 14 | mouseDownAt | id=rectZoom | 2222.64111328125,7377.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
      }
      // 15 | mouseMoveAt | id=rectZoom | 2222.64111328125,7377.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      // 16 | mouseUpAt | id=rectZoom | 2222.64111328125,7377.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).release().perform()
      }
      // 17 | click | id=rectZoom |  | 
      await driver.findElement(By.id("rectZoom")).click()
      // 18 | mouseDownAt | id=rectZoom | 2300.64111328125,7285.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
      }
      // 19 | mouseMoveAt | id=rectZoom | 2300.64111328125,7285.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      // 20 | mouseUpAt | id=rectZoom | 2300.64111328125,7285.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).release().perform()
      }
      // 21 | click | id=rectZoom |  | 
      await driver.findElement(By.id("rectZoom")).click()
      // 22 | mouseDownAt | id=rectZoom | 2354.64111328125,7324.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
      }
      // 23 | mouseMoveAt | id=rectZoom | 2354.64111328125,7324.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      // 24 | mouseUpAt | id=rectZoom | 2354.64111328125,7324.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).release().perform()
      }
      // 25 | click | id=rectZoom |  | 
      await driver.findElement(By.id("rectZoom")).click()
      // 26 | mouseDownAt | id=rectZoom | 2389.64111328125,7225.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
      }
      // 27 | mouseMoveAt | id=svg-doc1091-kzwapv57ntl | 14.99993896484375,103.00009155273438 | 
      {
        const element = await driver.findElement(By.id("svg-doc1091-kzwapv57ntl"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      // 28 | mouseUpAt | id=svg-doc1091-kzwapv57ntl | 14.99993896484375,103.00009155273438 | 
      {
        const element = await driver.findElement(By.id("svg-doc1091-kzwapv57ntl"))
        await driver.actions({ bridge: true }).moveToElement(element).release().perform()
      }
      // 29 | click | id=rectZoom |  | 
      await driver.findElement(By.id("rectZoom")).click()
      // 30 | mouseDownAt | id=rectZoom | 2411.64111328125,7360.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
      }
      // 31 | mouseMoveAt | id=rectZoom | 2411.64111328125,7360.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      // 32 | mouseUpAt | id=rectZoom | 2411.64111328125,7360.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).release().perform()
      }
      // 33 | click | id=rectZoom |  | 
      await driver.findElement(By.id("rectZoom")).click()
      // 34 | mouseDownAt | id=rectZoom | 2472.64111328125,7363.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
      }
      // 35 | mouseMoveAt | id=rectZoom | 2472.64111328125,7363.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      // 36 | mouseUpAt | id=rectZoom | 2472.64111328125,7363.162109375 | 
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).release().perform()
      }
      // 37 | click | id=rectZoom |  | 
      await driver.findElement(By.id("rectZoom")).click()
    });
  
})