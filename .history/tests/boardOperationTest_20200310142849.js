let boardOperations = require('../pages/boardOperations');
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

let login = require('../pages/login');//remove if you remove login page code

describe('Board page',function(){

  let driver
  let vars
    beforeEach(async function() {
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
  /*  it('Draw Square', function() {
     
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
    });*/

  /*  it('Add comment box',function(){
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
    });*/

    it('writing using pen', async()=>{
      await driver.findElement(By.xpath("//li[@class='sub-tool-list pen-tool box-height tip-disable active']")).click()
      await driver.findElement(By.css(".tool-pen > .svg__icon")).click()
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
      }
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).release().perform()
      }
      await driver.findElement(By.id("rectZoom")).click()
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
      }
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).release().perform()
      }
      await driver.findElement(By.id("rectZoom")).click()
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
      }
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).release().perform()
      }
      await driver.findElement(By.id("rectZoom")).click()
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
      }
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).release().perform()
      }
      await driver.findElement(By.id("rectZoom")).click()
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
      }
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      {
        const element = await driver.findElement(By.id("rectZoom"))
        await driver.actions({ bridge: true }).moveToElement(element).release().perform()
      }
      await driver.findElement(By.id("rectZoom")).click()
    });
  
})