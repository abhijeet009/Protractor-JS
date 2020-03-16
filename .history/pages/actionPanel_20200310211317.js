let actionPanel = function(){
    console.log("Action panel page executed");
    let redo = element(By.xpath("//li[@class='undo']//a"));
    let undo = element(By.xpath("//li[@class='redo']"));
    let home = element(By.xpath("//ul[@id='tour-toolbarright']//li[1]//a[1]"));
    let fullscreen = element(By.id("screenToggle"));
    let zoomin = element(By.xpath("//span[@id='zoom-in__btn']"));
    let zoomout = element(By.xpath("//span[@id='zoom-out__btn']"));
    let download= element(By.xpath("//div[@class='board-control-toolbar']//li[5]"));
    let changebackground =element(By.xpath("//ul[@id='tour-toolbarright']//li[@class='ng-scope active']"));
    let selectBoard = element(By.xpath("//a[contains(text(),'Introduction of circle')]"));

    this.clickBoard= async()=>{
        await selectBoard.click();
     }
    this.clickRedo = async()=>{
        await redo.click();
    }
    this.clickUndo = async()=>{
        await undo.click();
    }
    this.clickHome = async()=>{
        await home.click();
    }
    this.clickFullscreen = async()=>{
        await fullscreen.click();
    }
    this.clickZoomin = async()=>{
        await zoomin.click();
    }
    this.clickZoomout = async()=>{
        await zoomout.click();
    }
    this.clickDownload = async()=>{
        await download.click();
    }
    this.changebackground=async()=>{
        await changebackground.click();
    }
}
module.exports= new actionPanel()