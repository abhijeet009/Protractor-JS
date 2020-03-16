let boardOperations = function(){
    console.log("board operation page file executed");
    let selectBoard = element(By.xpath("//a[contains(text(),'Introduction of circle')]"));
   // let shapes = element(By.css('#shapes-menu-option'));
    let shapes = element(By.xpath('//li[@id="shapes-menu-option"]'));
    let rectangle= element(By.xpath('//a[@class="shape-rect"]'));
    let addComment = element(By.xpath("//li[@class='box-height']"));
    let addCommtopic = element(By.xpath("//input[@id='showCommentTopic']"));
    let addNewcomment= element(By.xpath("//div[@id='newComment']"));
    let postComment = element(By.css("[ng-click='createGroupInitializeComment()']"));
    this.clickBoard= async()=>{
       await selectBoard.click();
    }
    this.selectShape=async()=>{
        await  shapes.click();
    }
   this.selectRectangle=async()=>{
        await rectangle.click();
    }
    this.addCommentbox = async()=>{
        await addComment.click();
    }
    this.addTopic = async(dynamicTopic)=>{
        await addCommtopic.sendKeys(dynamicTopic);
    }
    this.addNewcomm = async(dynamicComment) => {
        await addNewcomment.sendKeys(dynamicComment);
    }
    this.clickPost = async()=>{
        await postComment.click();
    }
}
module.exports = new boardOperations();