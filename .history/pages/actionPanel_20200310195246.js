let actionPanel = function(){
    console.log("Action panel page executed");
    let redo = element(By.class("undo"));
    let undo = element(By.class("redo"));
    let home = element(By.data-tool("Dashboard"));
    let fullscreen = element(By.id("screenToggle"));
    let zoomin = element(By.xpath("//span[@id='zoom-in__btn']"));
    let zoomout = element(By.xpath("//span[@id='zoom-out__btn']"));
    let download= element(By.ng-class("isDownload"));
    let changebackground =element(By.xpath("//ul[@id='tour-toolbarright']//li[@class='ng-scope active']"));

    this.clickRedo = async()=>{
        await redo.click();
    }
    this.clickUndo = async()=>{
        await undo.click();
    }
    this.clickHome = async()=>{
        await home.click();
    }
}