let mouseAction = function(){

    browser.actions()
    .mouseMove({x: 400, y: 100})
    .mouseDown()
    .mouseMove({x: 400, y: 0})
    .perform();


}