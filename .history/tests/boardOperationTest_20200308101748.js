let boardOperations = require('../pages/boardOperations');
describe('Board page',function(){
    
    console.log("Board operation Test is executed");
    it('boardOperation function', function() {
        boardOperations.clickBoard();
        boardOperations.selectShape();
        boardOperations.selectRectangle();
    
    })
})