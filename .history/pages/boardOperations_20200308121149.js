let boardOperations = function(){
    console.log("board operation page file executed");
    let selectBoard = element(By.xpath("//a[contains(text(),'Introduction of circle')]"));
    let shapes = element(By.css('#shapes-menu-option'));
   // let rectangle= element(By.xpath('//a[@class='shape-rect']'));

    this.clickBoard=function(){
       await selectBoard.click();
    }

    this.selectShape=function(){
        await  shapes.click();
    }
  /*  this.selectRectangle=function(){
        rectangle.click();
    }*/
}
module.exports = new boardOperations();