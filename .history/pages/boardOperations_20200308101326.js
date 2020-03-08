import { By } from "selenium-webdriver"

let boardOperations = function(){
    let selectBoard = element(By.xpath("//a[contains(text(),'Introduction of circle')]"));
    let shapes = element(By.css('#shapes-menu-option'));
   // let rectangle= element(By.xpath('//a[@class='shape-rect']'));

    this.clickBoard=function(){
        selectBoard.click();
    }

    this.selectShape=function(){
        shapes.click();
    }
    this.selectRectangle=function(){
        rectangle.click();
    }
}
module.exports = new boardOperations();