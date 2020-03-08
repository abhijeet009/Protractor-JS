describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    var userLogin = async function(){
      console.log("In async");
      
    browser.get('https://huddle-board-v2.huddleiq.com/');
    browser.sleep(2000);
   // element(by.model('yourName')).sendKeys('Julie');
    element(by.id("email")).sendKeys("abhijeet@mailinator.com");
 

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
    }
  });
});
