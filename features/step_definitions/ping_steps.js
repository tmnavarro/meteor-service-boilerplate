const { defineSupportCode } = require('cucumber')

defineSupportCode(function({Given, When, Then}) {

  Given('the ping service', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  When('I call the endpoint', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Then('return an object', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

})
