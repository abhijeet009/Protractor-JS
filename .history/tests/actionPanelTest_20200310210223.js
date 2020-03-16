let actionPanel = require('../pages/actionPanel');
describe('Action Panel',function(){
    it('Action Panel Test',function(){
        actionPanel.clickBoard();
        actionPanel.clickRedo();
        actionPanel.clickUndo();
        actionPanel.clickZoomin();
        actionPanel.clickZoomout();
        actionPanel.clickFullscreen();
        actionPanel.clickDownload();
    })
})